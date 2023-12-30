import React, { useState, useEffect } from 'react';
import { realtimeDb } from '../services/firebase.js'; 


const CodeEditor = () => {
    const [code, setCode] = useState('');

    useEffect(() => {
        // Listen for real-time updates
        const codeRef = realtimeDb.ref('codeBlocks/myCodeBlock');
        codeRef.on('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                setCode(data);
            }
        });

        // Cleanup on unmount
        return () => {
            codeRef.off();
        };
    }, []);

    const handleCodeChange = e => {
        const newCode = e.target.value;
        setCode(newCode);
        // Update the database in real-time
        realtimeDb.ref('codeBlocks/myCodeBlock').set(newCode);
    };

    return (
        <textarea value={code} onChange={handleCodeChange}></textarea>
    );
};

export default CodeEditor;
