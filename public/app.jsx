var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React'
        };
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>
            </div>
           );
        // return React.createElement(
        //     'h1',
        //     null,
        //     'Hello React.createElement')
        }
    });

var firstName = 'Patricia';

ReactDOM.render(
            <Greeter name={firstName} message="Message from prop!"/>,
            document.getElementById('app')
            );