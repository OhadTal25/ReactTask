import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import hljs from 'highlight.js';
import { codeBlocks } from './Lobby.js';

const CodeBlock = () => {
    const { codeBlockTitle } = useParams();
    const navigate = useNavigate();
    const [socket, setSocket] = useState(null);

    // Find the code block by title and set the initial code
    const initialCodeBlock = codeBlocks.find(block => block.title === decodeURIComponent(codeBlockTitle));
    const [code, setCode] = useState(initialCodeBlock ? initialCodeBlock.code : '');
    const [isMentor, setIsMentor] = useState(true);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        const newSocket = io('http://localhost:3000', { withCredentials: true });
        setSocket(newSocket);

        newSocket.emit('joinCodeBlock', codeBlockTitle, (assignedRole) => {
            setIsMentor(assignedRole === 'mentor');
        });

        newSocket.on('codeChange', (updatedCode) => {
            if (isMentor) {
                setCode(updatedCode);
            }
        });

        hljs.highlightAll();

        return () => {
            newSocket.disconnect();
        };
    }, [codeBlockTitle, isMentor]);

    const handleCodeChange = (e) => {
        const newCode = e.target.value;
        setCode(newCode);

        if (!isMentor) {
            const solution = initialCodeBlock ? initialCodeBlock.solution.trim() : '';
            setIsCorrect(newCode.trim() === solution);
            if (socket) {
                socket.emit('codeUpdate', { codeBlockTitle, newCode });
            }
        }
    };

    const goToLobby = () => navigate("/");

    return (
        <div>
            <h1>{decodeURIComponent(codeBlockTitle)}</h1>
            <h2>Fix the code below:</h2>
            <div>
                {isMentor ? <p>Read-Only Mode (Mentor View)</p> : <p>Editable Mode (Student View)</p>}
                <textarea
                    id="code-editor"
                    name="code-editor"
                    value={code}
                    onChange={handleCodeChange}
                    disabled={isMentor}
                    style={{ width: '80%', height: '300px', opacity: isMentor ? 0.7 : 1 }}
                />
                {isCorrect && <div style={{ fontSize: '10rem', marginTop: '20px' }}>😊</div>}
                <button onClick={goToLobby} className="back-to-lobby-btn">Back to Lobby</button>
            </div>
        </div>
    );
};

export default CodeBlock;




