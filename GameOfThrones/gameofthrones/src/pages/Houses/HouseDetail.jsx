import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import GalleryHouses from '../../components/Gallery/GalleryHouses/GalleryHouses'
import { useNavigate, useParams } from "react-router-dom"; 
import GalleryHouseDetail from '../../components/Gallery/GalleryHouseDetail/GalleryHouseDetail';
// import GalleryHouseDeatil from '../../components/Gallery/GalleryHouseDetail/GalleryHouseDetail';

const HouseDetail = () => {
  const name = useParams().name
  console.log('hola adsas',name);

  const [House, setHouse] = useState([]);
  const DB_URL = `https://api.got.show/api/book/houses/${name}`;
  const getHouse = async () => {
    const res = await axios.get(DB_URL);
    console.log('casa sola',res.data);
   setHouse(res.data)
}

const [HouseData, setHouseData2] = useState([]);
const DB_URL2 = `https://api.got.show/api/show/houses/${name}`;
const getHouseData2 = async () => {
  const res = await axios.get(DB_URL2);
  console.log('casa  dato 2',res.data);
 setHouseData2(res.data)
}
useEffect(() =>getHouse, [])
useEffect(() =>getHouseData2  , [])

  return (
    <div>
    <GalleryHouseDetail list4={House} listB4={[HouseData]}></GalleryHouseDetail>
    
    </div>
  )
}

export default HouseDetail