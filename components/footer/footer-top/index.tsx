import React from "react";
import FooterForm from "./FooterForm";
import FooterNews from "./FooterNews";
import FooterTag from "./FooterTag";

const FooterTop = () => {
  return <div className="footerTop container">
    <FooterForm />
    <FooterNews />
    <FooterTag />
  </div>;
};

export default FooterTop;
