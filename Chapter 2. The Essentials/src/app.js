const root = document.querySelector("#root");

function App() {
  let [activity, setActivity] = React.useState("");
  let [todos, setTodos] = React.useState([]);

  function act(event) {
    setActivity(event.target.value);
  }

  function generateID() {
    return Date.now();
  }

  function submit(event) {
    event.preventDefault();
    setTodos([...todos, { id: generateID(), activity: activity }]);
    setActivity("");
  }


  function deleteTodo(todoId){

    let newTodos = todos.filter(function(todo){
      return todo.id != todoId
    })

    setTodos(newTodos)

  }

  return (
    <>
      <form onSubmit={submit}>
        <h1>REACT SIMPLE TODO APP</h1>
        <input
          placeholder="input activity"
          type="text"
          onChange={act}
          value={activity}
        />
        <button type="submit">Submit</button>

        <ol>
          {todos.map(function (todo) {
            return (
                <li key={todo.id}>{todo.activity}
                <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
                </li>
                
            );
          })}
        </ol>
      </form>
    </>
  );
}

ReactDOM.render(<App />, root);
