import React from "react";
import ReactDOM from "react-dom";
import BlockLine from "./components/BlockLine";
// import getUserInput from "./control/getUserInput";
import "./index.css";
import {
  iPiece,
  oPiece,
  tPiece,
  sPiece,
  zPiece,
  jPiece
} from "./components/iPiece";

const CurrentComponent = BlockLine;

const canvas = document.querySelector("#canvas");
const tetris = canvas.getContext("2d");
let xPos = 100;
let yPos = -100;
let currentBasePiece = oPiece;
let currentPiece = currentBasePiece.one;
let verticalOffSet = 0;

let gameBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 4, 5, 5, 5, 5, 0, 0, 0, 0],
  [3, 3, 1, 1, 2, 2, 0, 0, 0, 0],
  [0, 3, 1, 1, 2, 2, 0, 0, 0, 0]
];

function drawCurrentGameState() {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < 10; j++) {
      let color;
      switch (gameBoard[i][j]) {
        case 1:
          color = "white";
          break;
        case 2:
          color = "yellow";
          break;
        case 3:
          color = "blue";
          break;
        case 3:
          color = "green";
          break;
        case 4:
          color = "orange";
          break;
        case 5:
          color = "gray";
          break;
        default:
          color = "white";
          break;
      }
      if (gameBoard[i][j]) {
        tetris.fillStyle = color;
        tetris.fillRect(j * 25, i * 25, 25, 25);
      }
    }
  }
}

const getUserInput = () => {
  document.addEventListener("keydown", e => {
    if (yPos < 500) {
      switch (e.keyCode) {
        case 37: // left arrow
          if(xPos >= 25){
            xPos -= 25;
            refreshBoard();
          }
          break;
        case 39: // right arrow
          xPos += 25;
          refreshBoard();
          break;
        case 32:
          yPos = 500;
          refreshBoard();
          break;
        case 38: // down arrow
          if (currentBasePiece !== oPiece) {
            changePieceOrientation();
          }
          refreshBoard();
          break;
        case 40:
          if (yPos < 500) {
            yPos += 25;
          } else {
            yPos = 500;
          }
          refreshBoard();
          break;
      }
    }
  });
};

function changePieceOrientation() {
  switch (currentPiece) {
    case currentBasePiece.one:
      currentPiece = currentBasePiece.two;
      break;
    case currentBasePiece.two:
      currentPiece = currentBasePiece.three;
      break;
    case currentBasePiece.three:
      currentPiece = currentBasePiece.four;
      break;
    case currentBasePiece.four:
      currentPiece = currentBasePiece.one;
      break;
    default:
      currentPiece = currentBasePiece.one;
  }
}

document.addEventListener("keydown", e => {
  // if(e.keyCode === '')
  // console.log(e.keyCode);
});

const bgMusic = document.querySelector("audio");
bgMusic.loop = true;
bgMusic.volume = 0.5;

function drawGameboard() {
  tetris.fillStyle = "black";
  tetris.fillRect(0, 0, 400, 600);
}

function refreshBoard() {
  tetris.clearRect(0, 0, 400, 600);
  drawGameboard();
  drawCurrentPiece();
  drawCurrentGameState();
}

getUserInput();

let start = -100;
setInterval(() => {
  tetris.clearRect(0, 0, 400, 600);
  drawGameboard();
  drawCurrentPiece(start);
  drawCurrentGameState();
  if (yPos < 500) {
    yPos += 25;
  }
}, 300);

function drawCurrentPiece() {
  let xInput = xPos;
  let yInput = yPos;

  for (let i = 0; i < currentPiece.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (currentPiece[i][j]) {
        tetris.fillStyle = currentBasePiece.color;
        tetris.fillRect(j * 25 + xInput, i * 25 + yInput, 25, 25);
        // tetris.strokeRect(j * 25 + xInput, i * 25 + yInput, 25, 25);
      }
    }
  }
}

// drawPlayedPieces();

class App extends React.Component {
  state = {
    top: -115,
    left: 72,
    top2: -115,
    isDropping: false
  };

  startGame = () => {
    if (bgMusic.paused) {
      bgMusic.play();
    }
    this.getUserInput();
    this.setState({ isDropping: !this.state.isDropping });

    if (this.state.isDropping) {
      clearInterval(this.currentInterval);
    } else {
      this.currentInterval = setInterval(() => {
        this.dropPiece();
      }, 500);
    }
  };

  dropPiece = () => {
    if (this.state.top <= 525) {
      const newTop = this.state.top + 28;
      this.setState({
        top: newTop
      });
    } else {
      this.clearDrop();
    }
  };

  clearDrop = () => {
    clearInterval(this.currentInterval);
    this.setState({
      isDropping: !this.state.isDropping
    });
  };

  getUserInput = () => {
    document.addEventListener("keydown", e => {
      if (this.state.isDropping) {
        if (e.keyCode === 37 && this.state.left >= -60) {
          this.setState({
            left: this.state.left - 28
          });
        } else if (e.keyCode === 39 && this.state.left <= 286) {
          this.setState({
            left: this.state.left + 28
          });
        } else if (e.keyCode === 40) {
          this.dropPieceToBottom();
        } else if (e.keyCode === 32) {
          this.dropPieceToBottom();
        }
      }
    });
  };

  muteAudio() {
    if (bgMusic.paused) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  }

  dropPieceToBottom = () => {
    if (this.state.top <= 525) {
      this.setState({
        top: 532
      });
    }
  };

  render() {
    return (
      <div className="App">
        <CurrentComponent
          style={{ position: "absolute" }}
          top={this.state.top}
          left={this.state.left}
        />
        <button
          style={{
            position: "fixed",
            top: "5px",
            justifyContent: "center"
          }}
          onClick={this.startGame}
        >
          {this.state.isDropping ? "Pause" : "Start"}
        </button>
        <button style={{ position: "fixed", top: 22 }} onClick={this.muteAudio}>
          Mute
        </button>
        <canvas height="100" width="100" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render("Tetris", rootElement);
