var React = require('react');
var Todo = require('./ToDoItem')

class TodoList extends React.Component {
	render(){
		const todos = this.props.todos;
		const remove = this.props.remove;

		const todoNode = todos.map((todo) => {
			return (<Todo todo={todo} key={todo.id} remove={remove}/>)
		});

		return (<ul> {todoNode} </ul>)
	}
}

module.exports = TodoList;
