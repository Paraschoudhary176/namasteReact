/*
<div id="Parent">
<div id="Child">
<h1></h1>
</div>
</div>
*/

// const _heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From react"
// );
// const _root = ReactDOM.createRoot(document.getElementById("root"));
// _root.render(_heading);

const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

const _root = ReactDOM.createRoot(document.getElementById("root"));

_root.render(parent);
