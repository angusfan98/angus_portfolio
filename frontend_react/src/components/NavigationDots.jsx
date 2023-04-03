import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["about", "work", "skills", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#00a0c8" } : {}}
          />
        )
      )}
    </div>
  )
};

export default NavigationDots;
