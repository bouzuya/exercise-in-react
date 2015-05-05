import React from 'react';
import { Entry } from './entry';

export class EntryListItem extends React.Component {
  onClick() {
    if (this.props.isOpen) {
      return;
    }
    this.props.onOpen(this.props.entry);
  }

  onHeaderClick() {
    if (!this.props.isOpen) {
      return;
    }
    this.props.onClose(this.props.entry);
  }

  render() {
    var isOpen = this.props.isOpen ? true : false;
    return React.createElement(
      'li', {
        className: 'entry-list-item' + (isOpen ? ' is-open' : ''),
        style: {
          top: (isOpen ? 0 : this.props.index * 72) + 'px'
        },
        onClick: this.onClick.bind(this)
      },
      React.createElement(Entry, {
        entry: this.props.entry,
        isOpen: this.props.isOpen,
        onHeaderClick: this.onHeaderClick.bind(this)
      })
    );
  }
}
