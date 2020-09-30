import React, {Component} from 'react';
import firebase from './firebase';
import './App.css';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      journals: [],
      userInput: '',
    }
  }

  //connect to Firebase and read info stored in realtime database
  componentDidMount() {
    // create a Firebase reference and store it in dbRef variable
    const dbRef =  firebase.database().ref(); 
  
    dbRef.on('value',(response) => {

      const freshState = [];
      const data = response.val();


      for(const key in data) {
      

      //data in object with a key 
      freshState.push({
        key: key,
        journalEntry: data[key]
      });
    }

      //update journals with setState
      this.setState({
        journals: freshState
      });
    });
  }

  //update userInput with setState
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  //prevent webpage from refreshing
  handleClick = (event) => {
    event.preventDefault();

    //access to Firebase
    const dbRef = firebase.database().ref(); 

    //add new journal to Firebase realtime database
    dbRef.push(this.state.userInput)

    //reset input area
    this.setState({ 
      userInput: ''
    });
  }

  // to delete a specific journal entry from Firebase 
  handleRemove = (journalKey) => {

    // access to Firebase
    const dbRef = firebase.database().ref();

    //delete the journal based on the journalKey
    dbRef.child(journalKey).remove();
  }

  // use render to display code on screen
  render() {
    return (
      <div className="App">
        <h1>Personal Journal</h1>

      {/*form for users to write a journal and store the input in Firebase realtime database */}
      <form action="submit" className="wrapper">
          <div className="journalArea">
            <textarea id="write" name="write" rows="20" cols="50" placeholder="What's on your mind?" onChange={this.handleChange} value={this.state.userInput}></textarea>
            <button onClick={this.handleClick}>Log your journal</button>
          </div>
        </form>

        <ul className="wrapper">
        {
          //display journals here
          this.state.journals.map((journal) => {
            return (
              <li key={journal.key}>
                <p>{journal.journalEntry}</p>
                {/* button to delete journal */}
                <button onClick={ () => this.handleRemove (journal.key)}>Delete</button>
              </li>
            )
          })
        }
        </ul>
        <Footer />
      </div>
    )
  }
}

export default App;
