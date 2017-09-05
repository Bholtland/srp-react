var React = require('react');

const itemStyle = {
	fontSize: 20,
	fontFamily: "helvetica, sans-serif",
	color: "#666",
	margin: "10px 0",
	listStyleType: "square"
}

class Todo extends React.Component {
	render(){
		const todo = this.props.todo;
		const remove = this.props.remove;

		return (<li style={itemStyle} onClick={() => remove(todo.id)}>{todo.text}</li>);
	}
}

module.exports = Todo;