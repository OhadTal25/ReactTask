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
        
        displayData();`,
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
        });`,
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
        });`,
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
        
        // Output: Start, End, Inside Timeout, after 2 seconds`,
  },
];
