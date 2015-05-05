import React from 'react';

var Entry = React.createClass({
  displayName: 'Entry',
  onClick: function() {
    this.props.onHeaderClick();
  },
  render: function() {
    var isOpen = this.props.isOpen ? true : false;
    return React.createElement(
      'div', { className: 'entry' + (isOpen ? ' is-open' : '') },
      React.createElement(
        'div', { className: 'entry-date' },
        this.props.entry.date
      ),
      React.createElement(
        'div', { className: 'entry-title', onClick: this.onClick },
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
});

var EntryListItem = React.createClass({
  displayName: 'EntryListItem',
  onClick: function() {
    if (this.props.isOpen) return;
    this.props.onOpen(this.props.entry);
  },
  onHeaderClick: function() {
    if (!this.props.isOpen) return;
    this.props.onClose(this.props.entry);
  },
  render: function() {
    var isOpen = this.props.isOpen ? true : false;
    return React.createElement(
      'li', {
        className: 'entry-list-item' + (isOpen ? ' is-open' : ''),
        onClick: this.onClick
      },
      React.createElement(Entry, {
        entry: this.props.entry,
        isOpen: this.props.isOpen,
        onHeaderClick: this.onHeaderClick
      })
    );
  }
});

var EntryList = React.createClass({
  displayName: 'EntryList',
  getInitialState: function() {
    return { openedEntryDate: null };
  },
  onOpen: function(entry) {
    this.setState({ openedEntryDate: entry.date });
  },
  onClose: function(_) {
    this.setState({ openedEntryDate: null });
  },
  render: function() {
    return React.createElement(
      'ul', { className: 'entry-list' },
      this.props.entries.map((i) => {
        return React.createElement(EntryListItem, {
          entry: i,
          isOpen: (i.date === this.state.openedEntryDate),
          onOpen: this.onOpen,
          onClose: this.onClose
        });
      })
    );
  }
});

var App = React.createClass({
  displayName: 'App',
  getInitialState: function() {
    return {
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
  },
  render: function() {
    return React.createElement(
      'div', { className: 'app' },
      React.createElement(EntryList, { entries: this.state.entries })
    );
  }
});

export default React.createElement(App);
