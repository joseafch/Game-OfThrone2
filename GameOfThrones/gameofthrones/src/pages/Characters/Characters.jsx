import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GalleryCharacters from '../../components/Gallery/GalleryCharacters/GalleryCharacters';
import Search from '../../components/Search/Search';

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
    useEffect(() => getCharacters, [])
    return ( 

    
      
       <div>
       <input type="text" onChange={filter} />
       {/* <Search onSubmit={getCharacters}></Search> */}
       <GalleryCharacters list={characters}></GalleryCharacters>
       </div>
  )
}

export default Characters  ;
// export { filter }

