import React from 'react';

class App extends React.Component {
  render() {
    let text = "You're up and running! Change the content of your app in /src/components/App.js"

    return(
      <div>
        { text }
      </div>
    );
  }
}

export default App;
