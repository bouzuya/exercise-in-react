import React from 'react';

var HelloMessage = React.createClass({
  displayName: 'HelloMessage',
  render: function() {
    return React.createElement('div', null, 'Hello ', this.props.name);
  }
});

export default React.createElement(HelloMessage, { name: 'John' });
