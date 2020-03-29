
import React from "react";
import LandingPage from "./examples/LandingPage";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <LandingPage/>
    </>
  );
}

export default Index;
