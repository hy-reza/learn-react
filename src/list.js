function List() {
    const friends = ["andy", "carl", "max"];
  
    return (
        <ul>
          {friends.map(function (friend) {
            return <li key={friend}>{friend}</li>;
          })}
        </ul>
    );
  }
   