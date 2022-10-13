import React from "react";
import { useEffect } from "react";
import HowItsWork from "./howItsWork";

function HowItWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HowItsWork />
    </div>
  );
}

export default HowItWork;
