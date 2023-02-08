import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import GalleryCharacters from '../../components/Gallery/GalleryCharacters/GalleryCharacters';
import Search from '../../components/Search/Search';
import './Characters.scss'
import { MyLangContext } from '../../context/myLangContext';
function Characters() {
    const [characters, setCharacters] = useState([]);
    const DB_URL = "https://api.got.show/api/show/characters/"
   let  charactersList=[...characters]

    const getCharacters = async (searchText = "") => {
        const res = await axios.get(DB_URL + searchText);
        console.log(res.data);
       setCharacters(res.data)
    }
    function filter(e){
      let name = e.target.value
      setCharacters(charactersList.filter((character) => character.name.toLowerCase().includes(name)))
      console.log(characters);
    }
    const {t}=useContext(MyLangContext)
    useEffect(() => getCharacters, [])
    return ( 

    
      
       <div>
       <input placeholder={t('Search' )+'🔎' } className='input-search' type="text" onChange={filter} />
       {/* <Search onSubmit={getCharacters}></Search> */}
       <GalleryCharacters list={characters}></GalleryCharacters>
       </div>
  )
}

export default Characters  ;
// export { filter }

