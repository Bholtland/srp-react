var React = require('react');

const inputStyle = {
	padding: 10,
	width: 220,
	fontSize: 20
}

const buttonStyle = {
	width: 50,
	height: 47,
	position: "relative",
	top: 4,
	fontSize: 30,
	padding: 0,
	borderRadius: 0,
	marginTop: 10,
	border: "none",
	color: "#fff",
	backgroundColor: "turquoise"
}

class Input extends React.Component{

	render() {
		let input;
		return (
			<div>
				<input style={inputStyle} ref={value => {input = value;}}/>
				<button style={buttonStyle} onClick={() => {
					this.props.add(input.value);
					input.value = '';
				}}>
				+
				</button>
			</div>
		);
	}
};

module.exports = Input;