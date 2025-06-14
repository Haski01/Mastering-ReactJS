// -> our custom function which work as rendering element and creating element

function customRender(reactElement, mainContainer) {
  /* const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  mainContainer.appendChild(domElement);
  */

  // -> [Optimization of above code (using loop in setting attributes bcz setting attributes one by one is not good for good practice )]

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    // checking is there no property of children
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}

// creating <a> tag as element which we try to display
const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

/*
 -> creating customRender function which help us to append element in our 
 mainContainer(mainContainer is our refrence of root)
 -> customFuntion which add reatElement(<a> tag) into mainContainer(root) 
*/
customRender(reactElement, mainContainer);
