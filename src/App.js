import React, { Component} from 'react';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      journals: [],
    }
  }

  componentDidMount() {

    // Here we create a variable that holds a reference to our database
    const dbRef = firebase.database().ref();
  
  }

  render() {
    return (
      <div>
        <h1>Personal Journal</h1>
        <ul>
          {this.state.journals.map((journal) => {
            return (
              <li>
                <p></p>
              </li>
            )
          })}
        </ul>
        <button>Submit</button>
      </div>
    )
  }
}

export default App;
