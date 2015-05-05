import React from 'react';
import { EntryListItem } from './entry-list-item';

export class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openedEntryDate: null };
  }

  onOpen(entry) {
    this.setState({ openedEntryDate: entry.date });
  }

  onClose() {
    this.setState({ openedEntryDate: null });
  }

  render() {
    return React.createElement(
      'ul', { className: 'entry-list' },
      this.props.entries.map((i, index) => {
        return React.createElement(EntryListItem, {
          entry: i,
          index: index,
          isOpen: (i.date === this.state.openedEntryDate),
          onOpen: this.onOpen.bind(this),
          onClose: this.onClose.bind(this)
        });
      })
    );
  }
}
