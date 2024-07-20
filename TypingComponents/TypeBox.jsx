import React, { useState } from "react";

const TypeBox = () => {
  const [randomWords, setRandomWords] = useState(() => {
    return generate({ exactly: 500, max: 6, min: 1 });
  });



  return <div>

  </div>;
};

export default TypeBox;
