import React from 'react';
import { Link } from 'react-router-dom';

// Define an array of code blocks
export const codeBlocks = [
    {
        title: "Async Case",
        code: `async function fetchData { //modify here-add '()'
            return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 1000));
        }
        
        async function displayData() {
            const data = await fetchData();
            console.log(data); // Output after 1 second: "Data fetched"
        }
        
        displayData();`,
        solution: `async function fetchData() { //modify here-add '()'
            return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 1000));
        }
        
        async function displayData() {
            const data = await fetchData();
            console.log(data); // Output after 1 second: "Data fetched"
        }
        
        displayData();`
    },
    {
        title: "Callback Example",
        code: `function fetchData(callback) {
            setTimeout((()) => { //modify here - erase '()'
                callback('Data loaded');
            }, 2000);
        }
        
        fetchData(data => {
            console.log(data); // Logs 'Data loaded' after 2 seconds
        });`,
        solution: `function fetchData(callback) {
            setTimeout(() => { //modify here - erase '()'
                callback('Data loaded');
            }, 2000);
        }
        
        fetchData(data => {
            console.log(data); // Logs 'Data loaded' after 2 seconds
        });`
    },
    {
        title: "Promise Handling",
        code: `function fetchData() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('Data loaded');
                }, 2000);
            });
        }
        
        fetchData()then(data => { //modify here - add '.'
            console.log(data); // Logs 'Data loaded' after 2 seconds
        });`,
        solution: `function fetchData() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('Data loaded');
                }, 2000);
            });
        }
        
        fetchData().then(data => { //modify here - add '.'
            console.log(data); // Logs 'Data loaded' after 2 seconds
        });`
    },
    {
        title: "Event Loop Explanation",
        code: `console.log('Start');

        setTimeout(() =>  //modify here - add '{'
            console.log('Inside Timeout, after 2 seconds');
        }, 2000);
        
        console.log('End');
        
        // Output: Start, End, Inside Timeout, after 2 seconds`,
        solution: `console.log('Start');

        setTimeout(() => { //modify here - add '{'
            console.log('Inside Timeout, after 2 seconds');
        }, 2000);
        
        console.log('End');
        
        // Output: Start, End, Inside Timeout, after 2 seconds`
    },
];


const Lobby = () => {
    return (
        <div className="Lobby">
            <h1>Welcome to the Lobby!</h1>
            <h3>Please choose code block:</h3>
            <div className="logo-grid">
                <div className="logo-row">
                    <Link to={`/codeblock/${encodeURIComponent(codeBlocks[0].title)}`} className="code-block red-block adjust-down">
                        <div className="code-block-content">
                            {codeBlocks[0].title}
                        </div>
                    </Link>
                    <Link to={`/codeblock/${encodeURIComponent(codeBlocks[1].title)}`} className="code-block blue-block">
                        <div className="code-block-content">
                            {codeBlocks[1].title}
                        </div>
                    </Link>
                    
                </div>
                <div className="code-block white-block logo-block adjust-down">
                        <a href="https://www.moveo.group/" target="_blank" rel="noopener noreferrer">
                            <div className="code-block-content">
                                <img src="/moveo1.png" alt="Moveo" />
                            </div>
                        </a>
                    </div>
                <div className="logo-row">
                    <Link to={`/codeblock/${encodeURIComponent(codeBlocks[2].title)}`} className="code-block blue-block">
                        <div className="code-block-content">
                            {codeBlocks[2].title}
                        </div>
                    </Link>
                    
                    <Link to={`/codeblock/${encodeURIComponent(codeBlocks[3].title)}`} className="code-block red-block adjust-down">
                        <div className="code-block-content">
                            {codeBlocks[3].title}
                        </div>
                    </Link>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/ohadtal/" target="Ohad Tal" rel="noopener noreferrer">
                <p style={{ marginTop: '350px' }}>By: Ohad Tal</p></a>
        </div>
    );
}

export default Lobby;