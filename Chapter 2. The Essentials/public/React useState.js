function Login() {
  let [login, setLogin] = React.useState(false);

  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, " Wes Login "), /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setLogin(login = false);
      }
    }, "LOGOUT"));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Durung Login"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(login = true);
    }
  }, "LOGIN"));
}