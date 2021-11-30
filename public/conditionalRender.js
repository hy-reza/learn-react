function Conditional() {
  let [kenyang, setKenyang] = React.useState(false);
  const makanan = ["Pecel", "Soto", "Rawon", "Nasi Goreng"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, kenyang ? /*#__PURE__*/React.createElement("h1", null, " anda sudah kenyang") : /*#__PURE__*/React.createElement("h1", null, " Anda Belum makan "), !kenyang && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ol", null, makanan.map(function (menu) {
    return /*#__PURE__*/React.createElement("li", {
      key: menu
    }, menu);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setKenyang(true);
    }
  }, "Makan")));
}