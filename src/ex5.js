import React from 'react';

var MessageInput = React.createClass({
  displayName: 'MessageInput',
  onChange: function(e) {
    this.props.onChange(e.target.value);
  },
  onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this.props.onSubmit(e.target.value);
      e.target.value = '';
    }
  },
  render: function() {
    return React.createElement('input', {
      onChange: this.onChange, onKeyDown: this.onKeyDown
    });
  }
});

var MessageOutput = React.createClass({
  displayName: 'MessageOutput',
  render: function() {
    return React.createElement(
      'div', null,
      React.createElement('span', null, 'Hello, ', this.props.message),
      React.createElement(
        'ul', null,
        this.props.messages.map(function (i, index) {
          return React.createElement('li', { key: index }, i);
        })
      )
    );
  }
});

var Hello3 = React.createClass({
  displayName: 'Hello3',
  getInitialState: function() {
    return { message: 'bouzuya', messages: [] };
  },
  onTextChanged: function(text) {
    this.setState({ message: text });
  },
  onTextSubmitted: function(text) {
    var messages = this.state.messages.concat(text);
    this.setState({ messages: messages });
  },
  render: function() {
    return React.createElement(
      'div', null,
      React.createElement(MessageInput, {
        onChange: this.onTextChanged,
        onSubmit: this.onTextSubmitted
      }),
      React.createElement(MessageOutput, {
        message: this.state.message,
        messages: this.state.messages
      })
    );
  }
});

export default React.createElement(Hello3);
