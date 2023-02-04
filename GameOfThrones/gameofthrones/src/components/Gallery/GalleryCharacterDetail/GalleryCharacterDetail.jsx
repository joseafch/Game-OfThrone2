import React from "react";

function GalleryCharacterDetail({ list5 }) {
  console.log("aqui tiene q salir algo", list5);
  // var cosa = 'para ya señor y vete a dormir'
  let patata = "holajejejejej";
  return (
    <div>
      <h1>{patata}</h1>
      {list5.length > 0 &&
        list5.map((person, index) => (
          <div key={index}>
            <div>
              
              <p>{person?.name}</p>
              <img src={person?.image} alt={person.name}></img>
              {/* <p>{items.birth}</p> */}
            </div>
            {/* {console.log("no pirula")} */}
          </div>
        ))}
    </div>
  );
}
export default GalleryCharacterDetail;
