import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Houses from './pages/Houses/Houses';
import Cronology from './pages/Cronology/Cronology';
import CharactersDetail from './pages/Characters/CharactersDetail';
import HouseDetail from './pages/Houses/HouseDetail';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return ( <Router>
    <div className="background">
    <Header></Header>

      <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Characters" element={<Characters></Characters>} />
          <Route path="/Characters/:id" element={<CharactersDetail></CharactersDetail>} />
          <Route path="/Houses" element={<Houses></Houses>} />
          <Route path="/Houses/:id" element={<HouseDetail></HouseDetail>} />
          <Route path="/Cronology" element={<Cronology></Cronology>} />    
      </Routes>

    <Footer></Footer>
</div>
   </Router>
   
  );
}


export default App;









// function App() {


//   return (
//     <Router>
//     <div className="App-header">
//       <header >
//       <Link to="/">Home</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/characters">Characters</Link>
//       </header>
      

//       <Routes>
//       <Route path='/' element={<HomePage></HomePage>} />
//       <Route path='/contact' element={<ContactPage></ContactPage>} />
//       <Route path='/characters' element={<Characters></Characters>} />

//       </Routes>
//     </div>
//     </Router>
//   );
// }

// export default App;
