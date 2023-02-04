import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GalleryHouses from '../../components/Gallery/GalleryHouses/GalleryHouses';

const Houses = () => {
  const [Houses, setHouses] = useState([]);
  const DB_URL = "https://api.got.show/api/book/houses";
  
  const getHouses = async () => {
      const res = await axios.get(DB_URL);
      console.log(res.data);
     setHouses(res.data)
  }
  useEffect(() => getHouses, [])
  return ( 
    
     <div>
     <GalleryHouses list2={Houses}></GalleryHouses>
     </div>
)
}



export default Houses