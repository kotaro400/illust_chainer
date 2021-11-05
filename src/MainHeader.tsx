import React from "react";
import RuleModal from "./RuleModal";

const headerStyle: React.CSSProperties = {
  height: "60px",
  backgroundColor: "#fff",
  position: "relative",
  textAlign: "center",
};

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <img
        src={`${process.env.PUBLIC_URL}/apple.png`}
        width="60"
        height="60"
        alt=""
      />
      <RuleModal />
    </header>
  );
};

export default MainHeader;
