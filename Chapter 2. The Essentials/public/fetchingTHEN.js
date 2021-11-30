function FetchingThen() {
  React.useEffect(function () {
    getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "DATA FETCH"));
}