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
    setTodos([...todos, {
      id: generateID(),
      activity: activity
    }]);
    setActivity("");
  }

  function deleteTodo(todoId) {
    let newTodos = todos.filter(function (todo) {
      return todo.id != todoId;
    });
    setTodos(newTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("h1", null, "REACT SIMPLE TODO APP"), /*#__PURE__*/React.createElement("input", {
    placeholder: "input activity",
    type: "text",
    onChange: act,
    value: activity
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"), /*#__PURE__*/React.createElement("ol", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: deleteTodo.bind(this, todo.id)
    }, "Delete"));
  }))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);