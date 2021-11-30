function FetchingThen() {
    React.useEffect(function () {
      getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(
        function (response) {
          return response.json()
        }
      ).then(function(response){
        console.log(response)
      });
    },[]);
  
    return (
      <>
        <h1>DATA FETCH</h1>
      </>
    );
  }
  