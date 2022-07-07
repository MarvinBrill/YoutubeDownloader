import React, { useCallback, useEffect, useState } from "react";
import { downloadBlob } from "download.js";
import './App.css';

function App() {

  const [urlInput, setUrlInput] = useState("");

  const sendDownloadRequest = async () => {
    let filename;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/download?url=${urlInput}`, {
      method: "GET",
      headers: {
        "Content-Type": "audio/mpeg"
      }
    }).then(res => {
      filename = res.headers.get("filename");
      return res.blob();
    }).then(blob => {
      downloadBlob(filename, blob);
    });
    setUrlInput("");
  };

  return (
    <div className="surface">
      <div className="form">
        <span>Download Youtube-URL as mp3</span>
        <div className="form-inner-wrapper">
          <input className="url-input" placeholder="To download, paste Youtube-URL" onChange={(evt) => {setUrlInput(evt.target.value);}} value={urlInput}></input>
          <button className="download-button" onClick={sendDownloadRequest}>Download now!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
