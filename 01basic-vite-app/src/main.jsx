import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

// creating function directly in main file

function MyApp() {
  return (
    <div>
      <h1>Custom React || directly write function in main file</h1>
    </div>
  );
}

// -> passing my own custom element but it not working bcz of syntex

/*
  const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
*/

// -> Now we create our element according to react using "React.createElement" method/function .. here syntex is predefined

const myName = " Asad";

const reactElement = React.createElement(
  "a", // 1st parameter expacted as any tag
  { href: "google.com", target: "_blank" }, // 2nd parameter as properties/attributes in object
  "Click me to visit google", // 3rd as text
  myName // when whole tree completed then inject variable at the end
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>
  // reactElement
);
