function FetchandDisplay() {
  //Loading
  let [loading, setLoading] = React.useState(true); //Fetch (Mengambil data dari API)

  React.useEffect(function () {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json(); // console.log(request);

      console.log(response);
      setNews(response);
      setLoading(false);
    }

    getData();
  }, []); //Get Data from API

  let [news, setNews] = React.useState([]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "DATA FETECH"), loading ? /*#__PURE__*/React.createElement("p", null, "Loading...") : /*#__PURE__*/React.createElement("ol", null, news.map(function (news) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      key: news.id
    }, news.title));
  })));
}