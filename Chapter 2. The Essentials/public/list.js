function List() {
  const friends = ["andy", "carl", "max"];
  return /*#__PURE__*/React.createElement("ul", null, friends.map(function (friend) {
    return /*#__PURE__*/React.createElement("li", {
      key: friend
    }, friend);
  }));
}