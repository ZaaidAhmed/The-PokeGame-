// import React from 'react';

// // Home.jsx
// function Home() {
//   return (
//     <div className="home-container">
//       <h1 className="glow-text">Welcome to the Pokemon World!</h1>
//       <p className="home-description">Step into the game of adventure where you have fun with pokemons.</p>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import HomeData from '../assets/HomeData.jpg';  // Import the image

// function Home() {
//   return (
//     <div
//       className="home-container"
//       style={{
//         backgroundImage: `url(${HomeData})`,  // Use the imported image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         // filter: 'blur(10px)', // Apply the blur effect
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       <h1 className="glow-text">Welcome to the Pokemon World!</h1>
//       <p className="home-description">Step into the game of adventure where you have fun with pokemons.</p>
//     </div>
//   );
// }

// export default Home;


// src/components/Home.js
import React from 'react';
import Background from './Background';

// Home.jsx
function Home() {
  return (
    <div>
      <Background/>
   
    <div className="home-container">
      <h1 className="glow-text">Welcome to the Pokemon World!</h1>
      <p className="home-description">Step into the game of adventure where you have fun with pokemons.</p>
    </div>
    </div>
  );
}

export default Home;
