var React = require('react');
var Title = require('./Title');
var TodoContainer = require('./TodoContainer');

const wrapperStyle = {
	margin: "0 auto",
	display: "block",
	maxWidth: 300,
}

class App extends React.Component {
	render(){
		return(
			<div style={wrapperStyle}>
				<Title/>
				<TodoContainer/>
			</div>
		)
	}
}

module.exports = App;