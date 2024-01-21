// Imports React and Link component from react-router-dom for navigation.
import React from "react";
import { Link } from "react-router-dom";
import { codeBlocks } from "../codeBlocksData.js";

// Lobby component definition:
const Lobby = () => {
  return (
    // Main container for the Lobby.
    <div className="Lobby">
      <h1>Welcome to the Lobby!</h1>
      <h3>Please choose code block:</h3>
      <div className="logo-grid">
        <div className="logo-row">
          <Link
            to={`/codeblock/${encodeURIComponent(codeBlocks[0].title)}`}
            className="code-block red-block adjust-down"
          >
            <div className="code-block-content">{codeBlocks[0].title}</div>
          </Link>
          <Link
            to={`/codeblock/${encodeURIComponent(codeBlocks[1].title)}`}
            className="code-block blue-block"
          >
            <div className="code-block-content">{codeBlocks[1].title}</div>
          </Link>
        </div>
        <div className="code-block white-block logo-block adjust-down">
          <a
            href="https://www.moveo.group/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="code-block-content">
              <img src="/moveo1.png" alt="Moveo" />
            </div>
          </a>
        </div>
        <div className="logo-row">
          <Link
            to={`/codeblock/${encodeURIComponent(codeBlocks[2].title)}`}
            className="code-block blue-block"
          >
            <div className="code-block-content">{codeBlocks[2].title}</div>
          </Link>

          <Link
            to={`/codeblock/${encodeURIComponent(codeBlocks[3].title)}`}
            className="code-block red-block adjust-down"
          >
            <div className="code-block-content">{codeBlocks[3].title}</div>
          </Link>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/ohadtal/"
        target="Ohad Tal"
        rel="noopener noreferrer"
      >
        <p style={{ marginTop: "350px" }}>By: Ohad Tal</p>
      </a>
    </div>
  );
};

// Exports the Lobby component for use in other parts of the app.
export default Lobby;
