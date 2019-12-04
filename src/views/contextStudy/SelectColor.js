import React from "react";
import { ColorConsumer } from "./color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요!</h2>
      <ColorConsumer>
        {({ actions }) => {
          return (
            <div style={{ display: "flex" }}>
              {colors.map(color => {
                return (
                  <div
                    key={color}
                    style={{
                      background: color,
                      width: "24px",
                      height: "24px",
                      cursor: "pointer"
                    }}
                    onClick={() => actions.setColor(color)}
                    onContextMenu={e => {
                      e.preventDefault();
                      actions.setSubColor(color);
                    }}
                  />
                );
              })}
            </div>
          );
        }}
      </ColorConsumer>
    </div>
  );
};

export default SelectColors;
