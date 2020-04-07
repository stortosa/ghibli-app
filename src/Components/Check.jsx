import React, { useState } from 'react';

function Checkbox() {

  let msg;

  const [check, saveCheck] = useState(true);

  const handleCheck = (e) => {
    saveCheck({ check: !check })
    if (check === true) {
      msg = "checked";
      saveCheck(!check)
    } else {
      msg = "unchecked";
      saveCheck(!check)
    }
    console.log(msg)
    console.log(check)
  };

  return (
    <div className="react-container">
      <input type="checkbox" onChange={handleCheck} />
    </div>
  )
}

export default Checkbox;