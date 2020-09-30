import React, {Component} from 'react';
import firebase from './firebase';
import './App.css';

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

    //listen to the value change and use `response` as the db value
    dbRef.on('value',(response) => {
      console.log(response.val());

      const freshState = [];
      const data = response.val();


      for(const key in data) {
        console.log(key, data[key]); //journal property(journal1), data.journal1 journal value (journal entry)
        //push journal entry inside of a temporary array

        //push data as an object with key property
        freshState.push({
          key: key,
          journalEntry: data[key]
        });
      }

      //update our React state for journals
      this.setState({
        journals: freshState
      });
    });
  }

  //get user input and update the userInput state
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }


  // step 1: prevent webpage from refreshing
  // step 2: receive input from user and store it in Firebase
  // step 3: reset input area
  handleClick = (event) => {
    event.preventDefault(); //step 1

    //access to Firebase
    const dbRef = firebase.database().ref(); 

    //add new journal to Firebase
    dbRef.push(this.state.userInput)//step 2

    //reset input area
    this.setState({     //step 3
      userInput: ''
    });
  }

  // get the specific journal key to remove 
  // delete a specific journal entry from Firebase
  handleRemove = (journalKey) => {
    console.log(journalKey);

    // open portal to Firebase
    const dbRef = firebase.database().ref();

    //delete the journal based on journalKey
    dbRef.child(journalKey).remove();
  }

  render() {
    return (
      <div className="App">
        <h1>Personal Journal</h1>


      {/*form for users to write a journal and store the input in Firebase realtime database */}
      <form action="submit">
          <div className="journalArea">
            <textarea id="write" name="write" rows="20" cols="50" placeholder="What's on your mind?" onChange={this.handleChange} value={this.state.userInput}></textarea>
            <button onClick={this.handleClick}>Log your journal</button>
          </div>
        </form>





        
        <ul>
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

        
        
        <footer>
          <p className="footerParagraph">Created by Anthony Galea at Juno College</p>
        </footer>
      </div>
    )
  }
}

export default App;
