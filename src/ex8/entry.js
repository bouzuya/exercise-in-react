import React from 'react';

export class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.onHeaderClick();
  }

  render() {
    var isOpen = this.props.isOpen ? true : false;
    return React.createElement(
      'div', { className: 'entry' + (isOpen ? ' is-open' : '') },
      React.createElement(
        'div', { className: 'entry-date' },
        this.props.entry.date
      ),
      React.createElement(
        'div', { className: 'entry-title', onClick: this.onClick.bind(this) },
        this.props.entry.title
      ),
      React.createElement(
        'div', {
          className: 'entry-content',
          dangerouslySetInnerHTML: {
            __html: this.props.entry.content || ''
          }
        }
      )
    );
  }
}
