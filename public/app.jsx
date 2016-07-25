// states can be changed, and props can't
var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
// Greeter Message access 2 props that are passed to it: name, message
        return (
            <div>
            // renders these props to the component
                <h1>Some H1 {name} ! </h1>
                <p>Some paragraph </p>
            </div>
            );
    }
});
// GreeterForm is also a presentational component
// GreeterForm does not maintain its own state, it simply takes some props, & when the form gets submitted it calls a function; it never cares if the state gets updated,
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.messsage.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
            this.props.onNewName(name);
        }

        if (message.length > 0) {
            this.refs.message.value ='';
            updates.message = message;
        }
        this.props.onNewName(updates);
    },
    render: function () {
        return (

                <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Enter Name" />
                <textarea rows="3" cols="15" ref="message" placeholder="Enter Message"/>
                <button>Set Name</button>
                </form>

            );
    }
});


var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message, yo'
        };
    },

// set its name state to the props value
    getInitialState: function () {
        return {
            name : this.props.name
            // message : this.props.message
        };
    },
// callback
// handleNewName function looks for any change in the state of the variable name & if the new names changes, THEN it re-renders its child components within Greeter
    handleNewName: function (name) {
        this.setState({
            name: name

        });
    // handleNewMessage: function

// sets state of the attributes that you provide
//updates the state and rerenders the parts of the component that matter
    },
    render: function () {
        // this.state.name sets the value
        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>



                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>

            </div>
            );
    }
});

var firstName = 'Patricia';

ReactDOM.render(
    <Greeter name ={firstName}/>,

    document.getElementById('app')
    );