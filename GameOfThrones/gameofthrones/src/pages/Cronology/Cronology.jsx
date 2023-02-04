import React from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';
import GalleryCronology from '../../components/Gallery/GalleryCronology/GalleryCronology';

export default function Cronology(){
  const [charactersAges, setCharactersAge] = useState([]);
  // const [charactersAges2, setCharactersAge2] = useState([]);
  const DB_URL = `https://api.got.show/api/show/characters`


  const getCharactersAge = async () => {
    const res = await axios.get(DB_URL);
    console.log(res.data);
    setCharactersAge(res.data)
  };
  // const getCharactersAge2 = async () => {
  //   const res = await axios.get(DB_URLAge);
  //   console.log(res.data);
  //   setCharactersAge2(res.data)
  // };


  useEffect(() => getCharactersAge, [])
  return (
    <div>
      <GalleryCronology list3={charactersAges} ></GalleryCronology>
      Cronology</div>
  )
}

