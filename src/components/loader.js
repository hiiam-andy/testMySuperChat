import React from "react";
function Loader() {
  return (
    <div style={{ height: window.innerHeight - 50 }} className="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
