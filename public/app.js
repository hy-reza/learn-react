const root = document.querySelector("#root");

function App() {
  const friends = ["andy", "carl", "max"];
  return /*#__PURE__*/React.createElement("ul", null, friends.map(function (friend) {
    return /*#__PURE__*/React.createElement("li", {
      key: friend
    }, friend);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);