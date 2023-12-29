const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Comprehensive CORS configuration
const corsOptions = {
    origin: 'http://localhost:3001', // Allow requests from your frontend origin
    methods: ['GET', 'POST'], // Allowed request methods
    credentials: true, // Enable CORS to accept cookies/credentials
    allowedHeaders: ['Content-Type'] // Specify allowed headers
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Socket.IO server is running');
});

const io = new Server(server, {
    cors: corsOptions // Apply CORS settings to the Socket.IO server
});

const visitors = {}; // Keep track of the first visitor (mentor) for each code block

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinCodeBlock', (codeBlockTitle, callback) => {
        console.log(`Current Visitors: ${JSON.stringify(visitors)}`);

        let role;
        socket.join(codeBlockTitle);
        if (!visitors[codeBlockTitle]) {
            visitors[codeBlockTitle] = socket.id;
            role = 'mentor';
        } else {
            role = 'student';
        }
    
        console.log(`User ${socket.id} assigned role ${role} for ${codeBlockTitle}`);
        console.log(`Updated Visitors: ${JSON.stringify(visitors)}`);
    
        callback(role);
    });

    socket.on('codeUpdate', ({ codeBlockTitle, newCode }) => {
        console.log('Code update received for', codeBlockTitle, 'with new code:', newCode);
        socket.to(codeBlockTitle).emit('codeChange', newCode);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        for (const [codeBlockTitle, mentorId] of Object.entries(visitors)) {
            if (mentorId === socket.id) {
                delete visitors[codeBlockTitle];
                console.log(`Mentor for ${codeBlockTitle} cleared.`);
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
