import  { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(text);
  };

  return (
    <div className="container mx-auto p-4">
      <textarea
        className="w-full h-20 border border-gray-300 rounded p-2 mb-4 min-h-10"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Show Text
      </button>
      {displayText && (
        <div className="mt-4">
          <strong>Text:</strong> {displayText}
        </div>
      )}
    </div>
  );
};

export default Content;
