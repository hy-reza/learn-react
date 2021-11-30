function Form() {
  let [nama, setNama] = React.useState();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: function (event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/React.createElement("label", null, "Nama : "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: function (event) {
      setNama(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"), /*#__PURE__*/React.createElement("h1", null, "Halo namaku ", nama)));
}