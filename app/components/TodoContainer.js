var React = require('react');
var Input = require('./Input');
var TodoList = require('./ToDoList');

window.id = 0;

class TodoContainer extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todoData: []
		}

		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	addTodo(value){
		const todo = {text: value, id: window.id++}

		this.state.todoData.push(todo);

		this.setState({todoData: this.state.todoData});
	}

	removeTodo(id){
		const remainder = this.state.todoData.filter((todo) => {
			if(todo.id !== id) return todo;
		})

		this.setState({todoData: remainder});
	}

	render(){
		return (
			<div>
				<Input add={this.addTodo}/>
				<TodoList todos={this.state.todoData}  remove={this.removeTodo}/>
			</div>
		)
	}
}

module.exports = TodoContainer;