import React from "react";
import * as hooksViews from "./views/hookBasic";

console.log("hooksViews", hooksViews);

function StartApp() {
  //   Array.from(hooksViews).map(hooksView => {
  //     console.log(hooksView);
  //   });

  const views = () => {
    const viewKeyArray = Object.keys(hooksViews);

    const viewArray = viewKeyArray.map((viewKey, index) => {
      return <div key={index}>{hooksViews[viewKey]()}</div>;
    });

    return viewArray;
  };

  return (
    <div className="StartApp">
      start
      <div>{views()}</div>
    </div>
  );
}

export default StartApp;
