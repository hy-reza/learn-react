function Counter() {
  //React UseState
  const state = React.useState(0);
  const num = state[0];
  const updateNum = state[1]; //React UseEffect

  Reat.useState(function () {
    console.log('Terjadi Perubahan Pada Number');
  }, [num]);

  function plus() {
    updateNum(num + 1);
  }

  function min() {
    updateNum(num - 1);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "plus-btn",
    onClick: plus
  }, "+"), /*#__PURE__*/React.createElement("h1", {
    className: "number"
  }, num), /*#__PURE__*/React.createElement("button", {
    className: "min-btn",
    onClick: min
  }, "-"));
}