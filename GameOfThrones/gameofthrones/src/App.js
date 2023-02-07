import { Link, Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Houses from './pages/Houses/Houses';
import Cronology from './pages/Cronology/Cronology';
import CharacterDetail from './pages/Characters/CharacterDetail';
import HouseDetail from './pages/Houses/HouseDetail';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { MyLangContext } from "./context/myLangContext";
import { useTranslation } from "react-i18next";
function App() {
const {t, i18n} = useTranslation(['translation'])
const changeLenguage = (code) => {
  i18n.changeLanguage(code)
}
const elDeAtras = useLocation()

  return (
    <MyLangContext.Provider  value={{t, changeLenguage } }>
    
     <div className={elDeAtras.pathname === '/' ? "background" : 'black-bg'}  >

    <Header></Header>

      <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Characters" element={<Characters></Characters>} />
          <Route path="/Characters/:name" element={<CharacterDetail></CharacterDetail>} />
          <Route path="/Houses" element={<Houses></Houses>} />
          <Route path="/Houses/:name" element={<HouseDetail></HouseDetail>} />
          <Route path="/Cronology" element={<Cronology></Cronology>} />    
      </Routes>

    <Footer></Footer>

</div>
   
   </MyLangContext.Provider>
   
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
