import React from "react";

function GalleryHouseDetail({list4}) {
  console.log('aqui tiene q salir algo',list4);  
  return (
      <div>
        {list4.length>0&& list4.map((items, index) => (
          <div  key={index}>
            <div>{/* div principal*/}
              <div>{/* img nombre*/}
                <div><img src={items?.image} alt={items?.name}></img></div>
                <h2>{items.name}</h2>
                </div>
              <div>{/* div informacion*/}</div>

            </div>
              
          </div>
          
        )
        )
        }
      </div>
    )
  }
  export default GalleryHouseDetail