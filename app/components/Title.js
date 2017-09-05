var React = require('react');

const titleStyle = {
	color: "#666",
	textAlign: "center",
	fontFamily: "helvetica, sans-serif",
	textTransform: "uppercase"
}

class Title extends React.Component {

	render() {
		return (
			<header><h1 style={titleStyle}>To-do list</h1></header>
		)
	}
}

module.exports = Title;