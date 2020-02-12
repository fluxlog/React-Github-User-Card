import React from 'react';
import UserCard from "./components/UserCard"
import './App.css';


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/fluxlog')
    .then(res => res.json())
    .then(user => {this.setState({user: user}) })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;