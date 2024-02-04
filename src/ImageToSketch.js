import React, { useState } from "react";

function ImageToSketch() {
  const [isSketchMode, setIsSketchMode] = useState(false);

  const imgBoxStyle = {
    width: "300px",
    height: "300px",
    backgroundImage: 'url("IMG_01.jpg")',
    backgroundSize: "cover",
    ...(isSketchMode && {
      mixBlendMode: "difference",
      filter: "invert(100%) grayscale(100%) contrast(100%)",
    }),
  };

  const handleSketch = () => {
    setIsSketchMode(true);
  };

  const handleNormal = () => {
    setIsSketchMode(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="img-container" style={{ position: "relative" }}>
        <div className="img-box" style={imgBoxStyle}>
          <img src="" alt="Placeholder" />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <button
          style={{
            marginRight: "10px",
            color: "white",
            backgroundColor: "gray",
            height: "50px",
            width: "120px",
          }}
          onClick={handleSketch}
        >
          Sketch
        </button>
        <button
          style={{
            color: "white",
            backgroundColor: "green",
            height: "50px",
            width: "120px",
          }}
          onClick={handleNormal}
        >
          Normal
        </button>
      </div>
    </div>
  );
}

export default ImageToSketch;