// import { useState } from "react";
// import '../src/'

// function App() {

// let [health1, Sethealth1] = useState(100)
// let [won1, SetWon1] = useState(0)  
// let [health2, Sethealth2] = useState(100)
// let [won2, SetWon2] = useState(0)
// let [status1, SetStatus1] = useState([])
// let [status2, SetStatus2] = useState([])


// function Clic(clicked){
 
//   let Score1 = Math.floor(Math.random() * 5)+1
//   let Score2 = Math.floor(Math.random() * 5)+1
//   if (Score1 > Score2) {
          
//   }
//   console.log(Score1, Score2);
//   if (Score1 > Score2) {
//      Sethealth2(health2  - 10)
//      SetWon1(won1 + 1)
//     console.log("player 1 wins");
//   } else if (Score1 === Score2) {
//       console.log("draw");   
//   } else {
//     console.log("player 2 wins");
//     Sethealth1(health1  - 10)
//      SetWon2(won2 + 1)
//   }
//   SetStatus1(Score1,)
//   SetStatus2(Score2,)
//   if (health1 <= 10) {
//     console.log('player 2 health wins');
//     alert("player no.2 wins, press ok to play another game")
//     window.location.reload();
//   }
//   if (health2 <= 0) {
//     console.log('player 2 health wins');
//     alert("player no.2 wins, press ok to play another game")
//     window.location.reload();
//   }

//   }
//   return (
//     <div className="App">
//   <h1>shooting Game</h1>
//   <p>Player 1 won: {won1}</p>
//   <p>Player 2 won: {won2}</p>
//   <button onClick={Clic}>start game</button>
//   <p>Player 1 Health:{health1}</p>
//   <p>Player 2 Health:{health2}</p>
//   <p>Score player 1: {status1}</p>
//   <p>Score player 2: {status2}</p>
//     </div>
//   );
// }
 
// export default App;
