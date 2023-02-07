import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GalleryHouses from '../../components/Gallery/GalleryHouses/GalleryHouses';
import './HouseStyle.scss'
const Houses = () => {
  const [houses, setHouses] = useState([]);
  const DB_URL = "https://api.got.show/api/book/houses";
  let  housesList=[...houses]
  
  const getHouses = async () => {
      const res = await axios.get(DB_URL);
      console.log(res.data);
     setHouses(res.data)
  }
  function filter(e){
   let name = e.target.value
   setHouses(housesList.filter((house) => house.name.toLowerCase().includes(name)))
   console.log(houses);
 }
  useEffect(() => getHouses, [])
  return ( 
    
     <div className='div-content'>
       {/* <input type="text" onChange={filter} /> */}

     <GalleryHouses list2={houses}></GalleryHouses>
     </div>
)
}



export default Houses