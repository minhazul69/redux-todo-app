import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div
      className="item-center"
      style={{
        backgroundColor: "black",
        color: "White",
        padding: "1px 0",
        marginTop: "8px",
      }}
    >
      <p>Copyright &copy; {year} Todo App. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
