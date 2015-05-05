import React from 'react';

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

export default React.createElement(Hello3);
