// var ex1 = require('./ex1');
// var ex2 = require('./ex2');
// var ex3 = require('./ex3');

var React = require('react');

var MessageInput = React.createClass({
  displayName: 'MessageInput',
  onChange: function(e) {
    this.props.onChange(e.target.value);
  },
  render: function() {
    return React.createElement(
      'form', null,
      React.createElement('input', { onChange: this.onChange })
    );
  }
});

var MessageOutput = React.createClass({
  displayName: 'MessageOutput',
  render: function() {
    return React.createElement('div', null, 'Hello, ', this.props.message);
  }
});

var Hello3 = React.createClass({
  displayName: 'Hello3',
  getInitialState: function() {
    return { message: 'bouzuya'};
  },
  onTextChanged: function(text) {
    this.setState({ message: text });
  },
  render: function() {
    return React.createElement(
      'div', null,
      React.createElement(MessageInput, { onChange: this.onTextChanged }),
      React.createElement(MessageOutput, { message: this.state.message })
    );
  }
});

React.render(
  React.createElement(Hello3),
  document.getElementById('container')
);
