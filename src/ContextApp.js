import React from "react";
import ColorBox from "./views/contextStudy/ColorBox";
import ColorContext, { ColorProvider } from "./views/contextStudy/color";
import SelectColors from "./views/contextStudy/SelectColor";
const ContextApp = () => {
  /* Provider을 사용하면 Context의 쓰고있던 value를 변경할 수 있다. 검정에서 빨강으로 변한 걸 알 수 있다. 
     Provider을 사용할 때는 꼭 value 값을 명시해줘야 한다. 
  */

  return (
    <>
      <ColorProvider>
        <SelectColors />
        <ColorBox />
      </ColorProvider>
    </>
  );
};

export default ContextApp;
