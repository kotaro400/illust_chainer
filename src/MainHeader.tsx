import React from "react";
import RuleModal from "./RuleModal";

const headerStyle: React.CSSProperties = {
  height: "60px",
  backgroundColor: "#fff",
  position: "relative",
};

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
      <RuleModal />
    </header>
  );
};

export default MainHeader;
