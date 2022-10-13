import React from "react";
import TermsComponenet from "./terms";
import { useEffect } from "react";

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TermsComponenet />
    </div>
  );
}

export default Terms;
