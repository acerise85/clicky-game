import React, { Component } from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper/index";
import pics from "./pics.json";
import PicsCard from './Components/PicsCard';
import Score from './Components/Score'


class App extends Component {

  //Set state to pics.json
  state = {
    pics,
    clickedPics: [],
    score: 0,
    highScore: 0,
    

  };
  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = event.target;


  // };
  // componentDidMount() {

  // };

  shuffleArray = event => {
    event.preventDefault();
    let id =this.pics.id;
    let clickedPicsId = this.state.clickedPicsId;

    if(clickedPicsId.includes(id)){
      this.setState({ clickedPicsId: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPicsId.push(id)

      if(clickedPicsId.length === 12){
        this.setState({score: 12, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ pics, clickedPicsId, score: clickedPicsId.length, status: " " });

      for (let i = pics.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pics[i], pics[j]] = [pics[j], pics[i]];
      }
    }
    
};


  
  // handleIncrement = () => {
  //   // set score if pic has not been clicked yet
  //   if(this.pics.id !==true)
  //   this.setState({ count: this.state.count + 1 });
  // };

    
    render() {
      return (
        <Wrapper>

          <div>
            <h1 className="header">Clicky Game!!</h1>
            <h4 className="header">Click on the images to gain points, but be careful!</h4>
            <h4 className="header3"> Clicking on the same image twice ends the game!</h4>
          </div>
          <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               />
          <div className='flex-container'>
          <div className="container">
            {this.state.pics.map(picture => (

              <PicsCard
                
                key={picture.key}
                id={picture.id}
                image={picture.image}
                shuffleArray={this.shuffleArray}
              />

            ))}
            </div>
          </div>


        </Wrapper>
      );
    }
}

export default App;
