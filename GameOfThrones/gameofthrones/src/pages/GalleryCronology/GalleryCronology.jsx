import React from "react";
import "./GalleryCronology.scss";




function GalleryCronology({ list3 }) {
  return (
    <div className="c-Gallery_Crono">
    <button>0</button>
      {list3.length > 0 && list3.map((character, index) => (      
          <div  className="c-card_Crono"  key={index}>
                <img className="c-img_Crono" src={character.image} alt="character" />
                <p>{character.name}</p>
                <p>{character?.age?.age}</p>
                <div class="Rectangle-4"></div>
                </div>
        ))
        
        }
        
    </div>
  );
}
export default GalleryCronology;
