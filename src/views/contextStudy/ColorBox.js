import React from "react";
import ColorContext, { ColorConsumer } from "./color";

const ColorBox = () => {
  //이런 패턴을 Function as a child, Render Props 라고 한다.
  //컴포넌트 chilren이 있어야 할 자리에 함수를 전달
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color
            }}
          />
          <div
            style={{
              width: "50px",
              height: "50px",
              background: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
