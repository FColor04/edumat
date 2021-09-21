import React, { useState, useEffect } from "react";

const Toolbar = ({ children }) => {
  const [activeElement, setActiveElement] = useState(0);
  const [toolbarElements, setToolbarElements] = useState(children);

  useEffect(() => {
    setToolbarElements(
      React.Children.map(toolbarElements, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => setActiveElement(index),
          className: activeElement === index ? "active" : "",
        });
      })
    );
  }, [activeElement]);

  return <>{toolbarElements}</>;
};

export default Toolbar;
