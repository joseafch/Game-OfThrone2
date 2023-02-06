import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Cronology.scss"


const Chronology = () => {
    const [timeline, setTimeline] = useState([]);
    const charactersLine =[]
    const [ Order, setOrder]= useState(true)
  
    useEffect(() => {
      const getData = async () => {
        const {data} = await axios.get("https://api.got.show/api/show/characters/");
        console.log(data);
        setTimeline(data);
      };
      getData();
    }, []);
  
    for (const character of timeline) {
      if (character.age){
        if (character.age.age){
    charactersLine.push(character)
        }
      }
    }
    const ageOrder = () => {
      if (Order) {
        charactersLine.sort((a, b) => a.age.age - b.age.age);
      } else {
        charactersLine.sort((a, b) => b.age.age - a.age.age);
      }
    }
    const changeOrder=()=>{
      if(Order){
        setOrder(false)
        ageOrder()
      }else{
        setOrder(true)
        ageOrder()
      }
    }
    ageOrder()
    
    return (
      <>
      <div>
      </div>
      <div className='c-cronology--background'>
      <button className='c-cronology--btn' onClick={changeOrder}>{Order ? <span>O</span> 
            : <span>Y</span>}</button>
      <div className='c-cronology'>
          {charactersLine.map((element,index) => {
            return (
              <>
                  <div className="c-cronology--card" key={index} style={index % 2 ?
              { "margin-top": "55px", "margin-left": "-1.5px","padding-top":"24px", "height" : "150px", "border-left": "1px solid white" } :
              { "display": "flex" , "flex-direction": "column", "margin-top": "0px", "border-right": "1px solid white","align-items": "center"}}>
                    <h3 className='c-cronology--card__age'>{element.age.age}</h3>
                    <h2 className="c-cronology--card__name">{element.name}</h2>
                    <img className="c-cronology--card__img" src={element.image} alt=""/>
                  </div>
                </>)
          })}
      </div>
      </div>
      </>
    )
  }

  export default Chronology;