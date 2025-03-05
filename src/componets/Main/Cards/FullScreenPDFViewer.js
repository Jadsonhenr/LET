import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./FullScreenPDFViewer.css";

const FullScreenPDFViewer = ({ pdfFile, onClose }) => {
  const defaultLayout = defaultLayoutPlugin();

  return (
    <div className="pdf-fullscreen-container">
      <button className="close-button" onClick={onClose}>
        Fechar
      </button>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfFile} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
};

export default FullScreenPDFViewer;
