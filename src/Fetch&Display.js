function FetchandDisplay() {

    //Loading
    let [loading, setLoading ] = React.useState(true)
  
  
    //Fetch (Mengambil data dari API)
    React.useEffect(function () {
      async function getData() {
        const request = await fetch(
          "https://api.spaceflightnewsapi.net/v3/blogs"
        );
        const response = await request.json();
        // console.log(request);
        console.log(response);
  
        setNews(response);
        setLoading(false)
      }
      getData();
    }, []);
  
    //Get Data from API
    let [news, setNews] = React.useState([]);
  
    return (
      <>
        <h1>DATA FETECH</h1>
  
  
        {loading? <p>Loading...</p> : <ol>
          {news.map(function (news) {
            return (
              <>
                <li key={news.id}>{news.title}</li>
              </>
            );
          })}
        </ol>}
  
        
      </>
    );
  }