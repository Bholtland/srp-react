# srp-react

PREFACE
-------------------
Learning ReactJS was one of the things on my "coding" list. It's popularity lead to adoption in many apps and companies. 
For me, learning React has a lot of reasons. Of course it's nice to have a better chance at getting hired, but besides that, i wanted to make a switch from regular web development to component-based web development, since i believe that is the future. It's also a nice entrance toward mobile app development with React Native.

WHAT DID I DO?
-------------------
I started of with a course on Codecademy. I spent most of the time doing that. For me the overall picture of React development was hard to see at first. It seemed a bit inefficient. When i saw the power of reusing components, my mind made a switch. After doing the Codecademy course, i browsed for some good learning projects on working with ReactJS. One of the most common projects is making a to-do list. If that's a popular choice, then why not do that. Also, it's a nice and easy way of seeing reusable components at work and playing with what React has to offer.

I used tutorials, which i'll list below, on how to make a to-do list. At this point i still find it hard to write React without any help, but yeah, we all ask for help on Stackoverflow once in a while.

INSPIRATION
------------------
What i learned from React is more than the language itself. I fell in love with the way of thinking. I started looking into other ways of writing modular code, like vanilla Javascript components, AngularJS and VUEJs. Of course not every project has to be modular. A simple portfolio website works great in standard HTML & CSS, but because i want to work on apps more often, this is a new world for me with infinite possibilities.

WHAT IS REACT EXACTLY
------------------
React is both a frontend and backend library. It allows you to build performant web apps that are very scalable. React's filosophy is built around using Javascript components, rather than entire HTML documents per page. This is especially handy for both reusability and performance. React makes use of the shadow DOM tree, an actual, unrendered DOM tree that passes changes only to the DOM tree instead of rerendering the entire structure. It handles dynamic data very well.

When working with React, you have to imagine your design and think of how you want to split it up in components like in the image below:
http://blog-assets.risingstack.com/2015/08/react-js-tutorial-3_7eb441e9aec25b86b08a96ae119fcd7f.png

Each colored box represents a different component. You can also see that each component can be reused. This means no more stacks of div's with the same content every time.

Components can look very overwhelming and devious at first, but when you're starting to understand the bigger picture, it will make more sense. Let's take a look.

```javascript
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
```
What you are seeing here is a React component that represents an item on the todo list. Every component requires the React library, just like other NodeJS applications. You can also see the object "const itemStyle". These objects can be used to style the component. If you choose not to style the component, there are other ways, like regular css files.

Components are defined by classes. Classes are defined by "class [component name] extends React.Component". There are different ways of writing components, like "Functional components", where the component is written like a function. Besides that it has some other benefits.

Where our "class" component is written like:
```javascript
class Todo extends React.Component {
	render(){
		const todo = this.props.todo;
		const remove = this.props.remove;

		return (<li style={itemStyle} onClick={() => remove(todo.id)}>{todo.text}</li>);
	}
}
```
Our functional component would look like this:
```javascript
function Todo(props){
  const todo = props.todo;
	const remove = props.remove;
  return <li style={itemStyle} onClick={() => remove(todo.id)}>{todo.text}</li>
}
```
You may have noticed a method called Render(). This method will render the component when being called. It may return other components (we'll get to that) and/or "JSX". JSX allows you to write "HTML-looking" code inside your components. This way when being called, HTML is being generated the way you have written it. Our block of code "<li style={itemStyle} onClick={() => remove(todo.id)}>{todo.text}</li>" will return in the DOM with all of it's bound functions. 

In React, data can be passed from one component to another, this can be done by "states" or "props". We also define components in different ways. We have "stateful" and "stateless" components. "stateful" components are the controlling parts of our application. Think about the invisible brain managing our list of todo items. A todo item is a stateless component. It will receive input from our stateful component and outputs what we expected. So our stateful component passes a "todo" prop that contains information about the item. The todo item (stateless) then uses that data to simply render it into JSX and eventually HTML, just like we expect it to do.

Our stateful component looks like this:
```javascript
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
```
As you can see this component is way more complex. It contains custom methods like "removeData()". This component keeps track of our todo items. It has the ability to add them, remove them and store them. When looking at the "render" method, something strange occurs. There are HTML-like looking tags with capitals. These are actually component classes ready to be rendered. The rest of the data are props and states being passed to the component. When rendering a component, the to-be-rendered component needs to be required at the top of the component file. 

Something i did not explain yet, is the component lifecycle. Eacht component has lifecycle methods that you can use to run code at specific moments in the process. This means you can execute code before and after the component has been or should be "mounted". A specification of these lifecyle methods can be found here: https://reactjs.org/docs/react-component.html.

This wraps about the basics of React. There is much more to discover and to learn, also for me. My journey into componetized apps has just begun. 

Sources i used:
* https://www.codecademy.com/learn/react-101
* https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
* https://stackoverflow.com (various threads)

Hours spent:
Approximately 29 hours (already including the examination)

------------------
HOW TO RUN?

1. Pull the project
2. Run 'npm install'
3. Run npm run build
4. Open index.html in the "build" directory
