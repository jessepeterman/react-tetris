import React from "react";
import "../index.css";

function BlockLine(props) {
  return (
    <div style={{ position: "relative", top: props.top, left: props.left }}>
      <div id="block-line" />
      <div id="block-line" />
      <div id="block-line" />
      <div id="block-line" />
    </div>
  );
}

export default BlockLine;
