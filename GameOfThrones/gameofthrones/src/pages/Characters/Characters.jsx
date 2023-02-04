import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GalleryCharacters from '../../components/Gallery/GalleryCharacters/GalleryCharacters';

function Characters() {
    const [Characters, setCharacters] = useState([]);
    const DB_URL = "https://api.got.show/api/show/characters/";
    
    const getCharacters = async () => {
        const res = await axios.get(DB_URL);
        console.log(res.data);
       setCharacters(res.data)
    }
    useEffect(() => getCharacters, [])
    return ( 
      
       <div>
       <GalleryCharacters list={Characters}></GalleryCharacters>
       </div>
  )
}

export default Characters