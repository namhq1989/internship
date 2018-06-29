import React from 'react';
import Header from './header.js';
import Content from './content.js';
class App extends React.Component {
  render() {
    return (
      <div className="container wrapper "><br/>
        <Header />
        <div className="clear"></div>
        <Content />
      </div>
    );
  }
}
export default App;