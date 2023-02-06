import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import GalleryHouses from '../../components/Gallery/GalleryHouses/GalleryHouses'
import { useNavigate, useParams } from "react-router-dom"; 
import GalleryCharacterDetail from '../../components/Gallery/GalleryCharacterDetail/GalleryCharacterDetail.jsx'

const CharacterDetail = () => {
  
  const [character, setCharacter] = useState([]);
  const [characterHouse, setCharacterHouse] = useState([]);
  const name = useParams().name
 
  const DB_URL = `https://api.got.show/api/show/Characters/${name}`;
  const DB_URL2 = `https://api.got.show/api/book/houses/`;


 
 
  const getCharacter = async () => {
    const res = await axios.get(DB_URL);
   setCharacter(res.data)
   getCharacterHouse(res.data.house)
  }
 

  const getCharacterHouse = async (houseName) => {
  const res = await axios.get(DB_URL2 + houseName);
  setCharacterHouse(res.data[0])

  }


useEffect(() => getCharacter, [])



  return (
    
    <div>
    <GalleryCharacterDetail list5={[character]} listB5={characterHouse}></GalleryCharacterDetail>
    
    </div>
  )
}

export default CharacterDetail

// let fName
// const getCharacters = async () => {

// await axios.get(`https://api.got.show/api/show/Characters/${name}`).then((response) => {
//   setCharacter(response.data);
//   setCharacterDetail(response.data[0])
//   fName=response.data[0].name;
//   console.log(fName);
//   return response.data[0]
// }).then (async (houseData) => {
// await axios.get (`https://api.got.show/api/book/houses/${fName}`).then((res2) => {
//   setCharacterDetail(res2)
// }

// )})


// }