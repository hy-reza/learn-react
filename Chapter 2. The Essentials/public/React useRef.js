function Ref() {
  const text = React.useRef(null);
  React.useEffect(function () {
    text.current.textContent = "Halooo";
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: text
  }));
}