import React from 'react';
import { EntryList } from './entry-list';

export class App extends React.Component {
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
