import React from "react";

const headerStyle: React.CSSProperties = {
  height: "60px",
  backgroundColor: "#fff"
};

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
    </header>
  );
};

export default MainHeader;