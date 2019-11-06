import React, { useState, useEffect } from "react";

let refControll = null;
function HookRefBasic() {
  const onTest = () => {
    refControll.onClose();
  };

  return (
    <div>
      <button onClick={onTest}>test button</button>
      <Button
        onFunction={fnc => {
          refControll = fnc;
        }}
      />
      <Button/>
    </div>
  );
}

function Button(props) {
  const [open, setOpen] = useState(true);
  const { onFunction } = props;
  useEffect(() => {
    onFunction({ onOpen, onClose });
  }, [onFunction]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return <button disabled={open}>Button</button>;
}

export default HookRefBasic;
