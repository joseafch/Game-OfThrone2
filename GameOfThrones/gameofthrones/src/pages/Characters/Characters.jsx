import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GalleryCharacters from '../../components/Gallery/GalleryCharacters/GalleryCharacters';
import Search from '../../components/Search/Search';

function Characters() {
    const [Characters, setCharacters] = useState([]);
    const DB_URL = "https://api.got.show/api/show/characters/"
    
    const getCharacters = async (searchText = "") => {
        const res = await axios.get(DB_URL + searchText);
        console.log(res.data);
       setCharacters(res.data)
    }
    useEffect(() => getCharacters, [])
    return ( 
      
       <div>
       {/* <Search onSubmit={getCharacters}></Search> */}
       <GalleryCharacters list={Characters}></GalleryCharacters>
       </div>
  )
}

export default Characters