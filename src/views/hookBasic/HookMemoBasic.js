import React, { useState, useEffect, useCallback, useMemo } from "react";

let renderCount = 0;

const HookMemoBasic = props => {
  console.log("HOOK MEMO INNER");
  const [getCount, setcount] = useState(0);
  const [getOtherCount, setOtherCount] = useState(0);

  const style = {
    boardStyle: {
      border: "1px black solid",
      width: "500px"
    }
  };

  const doubleCount = useMemo(() => {
    return (count => {
      console.log("using useMemo");
      return count * 2;
    })(getCount);
  }, [getCount]);

  const addCount = useCallback(() => {
    console.log("using useCallback");
    renderCount++;
    setcount(getCount + 1);
    setOtherCount(getOtherCount + 1);
  }, [getCount, getOtherCount]);

  return (
    <div style={style.boardStyle}>
      {console.log("Memo Basic Render")}
      <div>Use Memo</div>
      <div>Render count when using two useState : {renderCount}</div>
      <br />
      <button onClick={addCount}>Double Number for using useMemo </button>
      <br />
      <span>normal Count : {getCount}</span>
      <br />
      <span>other Count: {getOtherCount}</span>
      <br />
      <span>doubleCount : {doubleCount}</span>
    </div>
  );
};

export default HookMemoBasic;
