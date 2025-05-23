// to import the CTE file. no API endpoint for this yet.

import { useState } from "react";
import "./ImportPop.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ImportPop = ({ isOpen, onClose }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  if (!isOpen) {
    // setFile(null);
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>Import Shipping CTE file sent by supplier</h3>
        <p>
          Import Shipping CTE file to capture and save the required KDEs for
          Receiving CTE.
        </p>

        {/* File upload area */}
        <div
          className="file-upload"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <span role="img" aria-label="upload-icon">
            📤
          </span>
          <p>
            {file ? (
              <>
                Select another file? Drag and drop files here, or{" "}
                <label htmlFor="file-input" className="browse-file">
                  browse file
                </label>
              </>
            ) : (
              <>
                Drag and drop files here, or{" "}
                <label htmlFor="file-input" className="browse-file">
                  browse file
                </label>
              </>
            )}
          </p>

          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {file && <p>File selected: {file.name}</p>}
      </div>
    </div>
  );
};

export default ImportPop;
