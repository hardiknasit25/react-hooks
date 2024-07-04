import React from "react";

function Temp() {
  console.log('Temp renderd');
  return (
    <div></div>
  )
}

export default React.memo(Temp)