import React, { useEffect } from "react";
import PrivacyPolicyComponent from "./privacyPolicy";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PrivacyPolicyComponent />;
}

export default PrivacyPolicy;
