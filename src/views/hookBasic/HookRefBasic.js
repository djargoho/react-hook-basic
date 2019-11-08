import React, { useState, useEffect, useCallback } from "react";

let refControll = null;

function HookRefBasic() {
  const onTest = () => {
    refControll.onToggle();
  };

  return (
    <div>
      {console.log("HOOK REF BASIC")}
      <button onClick={onTest}>test button 뜨아아 오늘 개발 실패</button>
      <Button />
    </div>
  );
}

function Button(props) {
  const [open, setOpen] = useState(true);
  // const { onFunction } = props;

  const onToggle = useCallback(() => {
    console.log("on Toggle", open);
    setOpen(!open);
  }, [open]);

  // console.log("onFunction", onFunction);

  useEffect(() => {
    refControll = { onOpen, onClose, onToggle };
  }, [onToggle]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <button disabled={open} onClick={onToggle}>
      ButtonTEST
    </button>
  );
}

export default HookRefBasic;
