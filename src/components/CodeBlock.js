import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import hljs from "highlight.js";
import { codeBlocks } from "../codeBlocksData.js";

const CodeBlock = () => {
  //This gets the title of the code block from the URL of the page.
  const { codeBlockTitle } = useParams();
  //This sets up a way to programmatically navigate to other pages in the app.
  const navigate = useNavigate();
  //This creates a state variable for the socket and initializes it as null.
  const [socket, setSocket] = useState(null);

  // Find the code block by title and set the initial code
  const initialCodeBlock = codeBlocks.find(
    (block) => block.title === decodeURIComponent(codeBlockTitle)
  );
  //This sets up a state variable for the current code, initially set to the code of the found code block or empty if not found.
  const [code, setCode] = useState(
    initialCodeBlock ? initialCodeBlock.code : ""
  );
  //This creates a state variable to keep track of whether the current user is a mentor.
  const [isMentor, setIsMentor] = useState(true);
  // This sets up a state variable to indicate if the current code is correct.
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    //Sets up a function to run after the component mounts. It's for handling side-effects in the component.
    //Creates a new Socket.IO connection to the server.
    const newSocket = io("http://localhost:3000", { withCredentials: true });
    //Stores the socket connection in the component's state.
    setSocket(newSocket);

    //Sends a message to server to join a specific code block room.
    newSocket.emit("joinCodeBlock", codeBlockTitle, (assignedRole) => {
      setIsMentor(assignedRole === "mentor");
    });

    //Listens for code changes from the server. If the user is a mentor, it updates the local code.
    newSocket.on("codeChange", (updatedCode) => {
      if (isMentor) {
        setCode(updatedCode);
      }
    });

    //Applies syntax highlighting.
    hljs.highlightAll();

    ////Cleans up by disconnecting the socket when the component unmounts.
    return () => {
      newSocket.disconnect();
    };
  }, [codeBlockTitle, isMentor]);

  //Defines a function to handle changes in the code editor.
  const handleCodeChange = (e) => {
    //Gets the new code value from the event.
    const newCode = e.target.value;
    //Updates the code in the component's state.
    setCode(newCode);

    //If the user is not a mentor, it checks if the code is correct and sends updates to the server.
    if (!isMentor) {
      const solution = initialCodeBlock ? initialCodeBlock.solution.trim() : "";
      setIsCorrect(newCode.trim() === solution);
      if (socket) {
        socket.emit("codeUpdate", { codeBlockTitle, newCode });
      }
    }
  };
  //could use <Link> instead this hook
  const goToLobby = () => navigate("/");

  return (
    <div>
      <h1>{decodeURIComponent(codeBlockTitle)}</h1>
      <h2>Fix the code below:</h2>
      <div>
        {isMentor ? (
          <p>Read-Only Mode (Mentor View)</p>
        ) : (
          <p>Editable Mode (Student View)</p>
        )}
        <textarea
          id="code-editor"
          name="code-editor"
          value={code}
          onChange={handleCodeChange}
          disabled={isMentor}
          style={{ width: "80%", height: "300px", opacity: isMentor ? 0.7 : 1 }}
        />
        {isCorrect && (
          <div style={{ fontSize: "10rem", marginTop: "20px" }}>😊</div>
        )}
        <button onClick={goToLobby} className="back-to-lobby-btn">
          Back to Lobby
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
