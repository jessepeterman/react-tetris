import './index.1.tsx';

// import React from "react";
// import ReactDOM from "react-dom";
// import BlockLine from "./components/BlockLine";
// // import getUserInput from "./control/getUserInput";
// import "./index.css";
// import {
//   iPiece,
//   oPiece,
//   tPiece,
//   sPiece,
//   zPiece,
//   jPiece
// } from "./components/iPiece.ts";

// const CurrentComponent = BlockLine;

// const canvas = document.querySelector("#canvas");
// const tetris = canvas.getContext("2d");
// const bgMusic = document.querySelector('audio');

// // refactor piece to be an object with peice.basePiece, piece.length, piece.width,. piece.blockSize... properties
// let basePiece = jPiece;
// let piece = basePiece.one;
// let pieceWidth = piece[0].length;
// let pieceHeight = piece.length;
// let pieceBlockSize = 25;
// let verticalOffSet = 0;

// let xPos = 100;
// let yPos = -currentPieceHeight * 25;
// const gameboardWidth = 400;
// const gameboardHeight = 600;

// // figure out a way to check the currentPiece length & height against the pieces current position
// // if it's over the edge and move it back to the edge maybe in setPieceOffset?
// // create checkPieceOffset function to check?

// function checkForPieceOverEdge(){
//   if(pieceLength){
    
//   }
// }

// function adjustPieceOverTheEdge(){
//   if(true){}
// }

// function startGame() {
//   setInterval(() => {
//     tetris.clearRect(0, 0, 400, 600);
//     drawGameboard();
//     drawCurrentPiece(currentPieceHeight);
//     drawCurrentGameState();
//     if (yPos <= 600 - (currentPieceHeight * pieceBlockSize) - pieceBlockSize) {
//       yPos += 25;
//     }
//   }, 300);
// }

// function playMusic() {
  
//   bgMusic.loop = true;
//   bgMusic.volume = 0.5;
// }

// function moveCurrentPiece(position, value){
//   switch(position){
//     case 'x':
//       xPos += value;
//       // refreshBoard();
//       break;
//     case 'y':
//       if(value === 600){
//         yPos = 600 - currentPieceHeight * pieceBlockSize;
//       }else{
//         yPos += value;
//       }
//       // refreshBoard();
//       break;
//     default:
//       break;
//   }
//   refreshBoard();
// }

// const getUserInput = () => {
//   document.addEventListener("keydown", e => {
//     if (yPos < gameboardHeight - currentPieceHeight * pieceBlockSize) {
//       switch (e.keyCode) {
//         case 37: // left arrow
//           if (xPos >= 25) {
//             moveCurrentPiece('x', -25);
//           }
//           break;
//         case 39: // right arrozzzzw
//           if (xPos <= gameboardWidth - pieceWidth * 25 - pieceBlockSize) {
//             moveCurrentPiece('x', 25);
//           }
//           break;
//         case 32:
//           moveCurrentPiece('y', 600);
//           break;
//         case 38: // down arrow
//           if (basePiece !== oPiece) {
//             changePieceOrientation();
//           }
//           refreshBoard();
//           break;
//         case 40: 
//           if (yPos <= 600 - 25 - currentPieceHeight * 25) {
//             yPos += 25;
//           } else {
//             yPos = gameBoard - currentPieceHeight * 25;
//           }
//           refreshBoard();
//           break;
//         default:
//           break;
//       }
//     }
//   });
// };


// function setPieceOrientationProperties() {
//   pieceWidth = piece[0].length;
//   currentPieceHeight = piece.length;
//   if (xPos > 400) {
//   }
// }

// let gameBoard = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 15
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 24
// ];

// function drawCurrentGameState() {
//   for (let i = 0; i < gameBoard.length; i++) {
//     for (let j = 0; j < 10; j++) {
//       let color;
//       switch (gameBoard[i][j]) {
//         case 1:
//           color = "white";
//           break;
//         case 2:
//           color = "yellow";
//           break;
//         case 3:
//           color = "blue";
//           break;
//         case 3:
//           color = "green";
//           break;
//         case 4:
//           color = "orange";
//           break;
//         case 5:
//           color = "gray";
//           break;
//         default:
//           color = "white";
//           break;
//       }
//       if (gameBoard[i][j]) {
//         tetris.fillStyle = color;
//         tetris.fillRect(j * 25, i * 25, 25, 25);
//       }
//     }
//   }
// }

// function changePieceOrientation() {
//   switch (piece) {
//     case basePiece.one:
//       piece = basePiece.two;
//       setPieceOrientationProperties();
//       break;
//     case basePiece.two:
//       piece = basePiece.three;
//       setPieceOrientationProperties();
//       break;
//     case basePiece.three:
//       piece = basePiece.four;
//       setPieceOrientationProperties();
//       break;
//     case basePiece.four:
//       piece = basePiece.one;
//       setPieceOrientationProperties();
//       break;
//     default:
//       piece = basePiece.one;
//   }
// }

// document.addEventListener("keydown", e => {
//   // if(e.keyCode === '')
//   // console.log(e.keyCode);
// });



// function drawGameboard() {
//   tetris.fillStyle = "black";
//   tetris.fillRect(0, 0, 400, 600);
// }

// function refreshBoard() {
//   tetris.clearRect(0, 0, 400, 600);
//   drawGameboard();
//   drawCurrentPiece();
//   drawCurrentGameState();
// }

// startGame();
// getUserInput();
// playMusic();


// function drawCurrentPiece() {
//   let xInput = xPos;
//   let yInput = yPos;

//   for (let i = 0; i < piece.length; i++) {
//     for (let j = 0; j < 10; j++) {
//       if (piece[i][j]) {
//         tetris.fillStyle = basePiece.color;
//         tetris.fillRect(j * pieceBlockSize + xInput, i * pieceBlockSize + yInput, pieceBlockSize, pieceBlockSize);
//         // tetris.strokeRect(j * 25 + xInput, i * 25 + yInput, 25, 25);
//       }
//     }
//   }
// }

// class App extends React.Component {
//   state = {
//     top: -115,
//     left: 72,
//     top2: -115,
//     isDropping: false
//   };

//   startGame = () => {
//     if (bgMusic.paused) {
//       bgMusic.play();
//     }
//     this.getUserInput();
//     this.setState({ isDropping: !this.state.isDropping });

//     if (this.state.isDropping) {
//       clearInterval(this.currentInterval);
//     } else {
//       this.currentInterval = setInterval(() => {
//         this.dropPiece();
//       }, 500);
//     }
//   };

//   dropPiece = () => {
//     if (this.state.top <= 525) {
//       const newTop = this.state.top + 28;
//       this.setState({
//         top: newTop
//       });
//     } else {
//       this.clearDrop();
//     }
//   };

//   clearDrop = () => {
//     clearInterval(this.currentInterval);
//     this.setState({
//       isDropping: !this.state.isDropping
//     });
//   };

//   getUserInput = () => {
//     document.addEventListener("keydown", e => {
//       if (this.state.isDropping) {
//         if (e.keyCode === 37 && this.state.left >= -60) {
//           this.setState({
//             left: this.state.left - 28
//           });
//         } else if (e.keyCode === 39 && this.state.left <= 286) {
//           this.setState({
//             left: this.state.left + 28
//           });
//         } else if (e.keyCode === 40) {
//           this.dropPieceToBottom();
//         } else if (e.keyCode === 32) {
//           this.dropPieceToBottom();
//         }
//       }
//     });
//   };

//   muteAudio() {
//     if (bgMusic.paused) {
//       bgMusic.play();
//     } else {
//       bgMusic.pause();
//     }
//   }

//   dropPieceToBottom = () => {
//     if (this.state.top <= 525) {
//       this.setState({
//         top: 532
//       });
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <CurrentComponent
//           style={{ position: "absolute" }}
//           top={this.state.top}
//           left={this.state.left}
//         />
//         <button
//           style={{
//             position: "fixed",
//             top: "5px",
//             justifyContent: "center"
//           }}
//           onClick={this.startGame}
//         >
//           {this.state.isDropping ? "Pause" : "Start"}
//         </button>
//         <button style={{ position: "fixed", top: 22 }} onClick={this.muteAudio}>
//           Mute
//         </button>
//         <canvas height="100" width="100" />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render("Tetris", rootElement);
