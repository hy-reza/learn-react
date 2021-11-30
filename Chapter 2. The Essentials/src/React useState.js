function Login(){
    let [login, setLogin] = React.useState(false);

    if (login) {
      return (
        <>
          <h1> Wes Login </h1>
          <button
            onClick={function () {
              setLogin((login = false));
            }}
          >LOGOUT</button>
        </>
      );
    }
   
    return (
      <>
        <h1>Durung Login</h1>
        <button
          onClick={function () {
            setLogin((login = true));
          }}
        >
          LOGIN
        </button>
      </>
    );
}