const root = document.querySelector("#root");

function App() {
  const friends = ["andy", "carl", "max"];

  return (
      <ul>
        {friends.map(function (friend) {
          return <li key={friend}>{friend}</li>;
        })}
      </ul>
  );
}

ReactDOM.render(<App />, root);
