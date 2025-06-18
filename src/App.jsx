import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Cristiano Ronaldo",
        bio: "Portuguese professional footballer who plays as a forward for Al Nassr and captains the Portugal national team.",
        imgSrc: "https://example.com/ronaldo.jpg", // Replace with actual image URL
        profession: "Professional Footballer"
      },
      shows: false,
      mountTime: new Date(),
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountTime, currentTime } = this.state;
    
    // Calculate time since component mounted
    const secondsSinceMount = Math.floor((currentTime - mountTime) / 1000);
    
    return (
      <div className="App">
        <button onClick={this.toggleShow} className="toggle-btn">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {shows && (
          <div className="profile-card">
            <img src={imgSrc} alt={fullName} className="profile-img" />
            <h1>{fullName}</h1>
            <h2>{profession}</h2>
            <p>{bio}</p>
          </div>
        )}
        
        <div className="timer">
          Component mounted {secondsSinceMount} seconds ago
        </div>
      </div>
    );
  }
}

export default App;