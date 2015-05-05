import React from 'react';

class Entry extends React.Component {
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

class EntryListItem extends React.Component {
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

class EntryList extends React.Component {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          date: '2015-04-01',
          title: 'entry 1'
        },
        {
          date: '2015-04-02',
          title: 'entry 2',
          content: '<p>ほげふがぴよあああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ほげふがぴよ</p><p>ふがふがエンド！</p>'
        },
        {
          date: '2015-04-03',
          title: 'entry 3'
        },
        {
          date: '2015-04-04',
          title: 'entry 4'
        }
      ]
    };
  }

  render() {
    return React.createElement(
      'div', { className: 'app' },
      React.createElement(EntryList, { entries: this.state.entries })
    );
  }
}

export default React.createElement(App);
