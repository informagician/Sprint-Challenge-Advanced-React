import React from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import Search from './components/Search'

class App extends React.Component {
  
  state = {
    playerData: []
  };
  
  
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({playerData: [...res.data]})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavBar />
        <main>
        {/* <Search state={this.state} /> */}
        <ul >
        {this.state.playerData.map(item => (
            <li key={item.id}>
            <span>{item.name}</span>,
            <span>{item.country}</span>,
            <span>{item.searches}</span>
            </li>
        ))}
        </ul>
        </main>
      </div>
    );
  }
}

export default App;
