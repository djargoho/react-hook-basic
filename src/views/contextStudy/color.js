import React, { createContext, useState } from "react";

//새 Context 만들기

// const ColorContext = createContext({ color: "black" });

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: {
      setColor,
      setSubColor
    }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
