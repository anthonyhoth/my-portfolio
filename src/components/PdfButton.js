import React from "react";

const PdfButton = () => {
  const openPdf = () => {
    // Define the path to the PDF file within your project directory
    const pdfFilePath = "./resume.pdf"; // Replace with the actual path

    // Open the PDF in a new browser tab or window
    window.open(pdfFilePath, "_blank");
  };

  return (
    <button
      className="bg-gray-400 text-gray-800 focus:outline-none hover:bg-gray-500 rounded px-3 py-1 mr-3"
      onClick={openPdf}
    >
      My Resume
    </button>
  );
};

export default PdfButton;
