import React, { Component } from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper/index";
import pics from "./pics.json";
import PicsCard from './Components/PicsCard';
import Score from './Components/Score'
import Jumbo from './Components/Jumbo/Jumbo'
import { defaultCoreCipherList } from 'constants';


class App extends Component {

  //Set state to pics.json
  constructor(props) {
    super(props);
    this.state = {
      pics,
      clickedPics: [],
      score: 0,
      highScore: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {

  };

  handleClick = event => {
    event.preventDefault();
    console.log('id', event.target.id);
    let clickedArray = this.state.clickedPics;
    console.log(clickedArray)


    if (clickedArray.includes(event.target.id)) {
      console.log('game over');
    } else {

      clickedArray.push(event.target.id)


      // add score here;



      this.setState({
        clickedPics: clickedArray,
        score: this.state.score + 1 
      });
    }



// Shuffle here















  }

  shuffleArray = event => {
    event.preventDefault();
    let id;
    let clickedPicsId = this.state.clickedPicsId;

    if (clickedPicsId.includes(id)) {
      this.setState({
        clickedPicsId: [],
        score: 0,
        status: "Game Over! You lost. Click to play again!"
      });
      return;

    } else {
      clickedPicsId.push(id)

      if (clickedPicsId.length === 12) {
        this.setState({ score: 12, status: "You Won!", clickedPicsIds: [] });
        console.log('You Win');
        return;
      }

      this.setState({
        pics,
        clickedPicsId,
        score: clickedPicsId.length,
        status: " "
      });

      for (let i = pics.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pics[i], pics[j]] = [pics[j], pics[i]];
      }
    }

  };



  render() {
    return (


      <Wrapper>
        <Jumbo />
        {this.state.score}
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
                // shuffleArray={this.shuffleArray}
                handleClick={this.handleClick}
              />

            ))}
          </div>
        </div>


      </Wrapper>
    );
  }
}

export default App;
