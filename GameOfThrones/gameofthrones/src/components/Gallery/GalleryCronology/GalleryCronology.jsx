function GalleryCronology({list3}) {
    return (
      <div>
      {list3.length>0&& list3.map((character, index) => (
          <div  key={index}>
            <div>
              <div> <img src={character.image} alt="character"/></div>
              <div> <p>{character.name}</p></div>
            <div><p>{character?.age?.age}</p></div>
            </div>
              
          </div>
          
      )
       )
       }
      </div>
    )
  }
  export default GalleryCronology
  // {list4.map((item, index) => (
  //   <div Key={index}>{character.name===item.name && <p>{item.age}</p>}</div>) )}
  // </div>