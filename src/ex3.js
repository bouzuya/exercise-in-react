import React from 'react';

var Hello2 = React.createClass({
  displayName: 'Hello2',
  getInitialState: function() {
    return { message: 'bouzuya'};
  },
  onTextChanged: function(e) {
    console.log('changed!');
    this.setState({ message: e.target.value });
  },
  render: function() {
    console.log('render!');
    return React.createElement(
      'div', null,
      React.createElement(
        'form', null,
        React.createElement(
          'input', { onChange: this.onTextChanged, value: this.state.message }
        )
      ),
      React.createElement('div', null, 'Hello, ', this.state.message)
    );
  }
});

export default React.createElement(Hello2);
