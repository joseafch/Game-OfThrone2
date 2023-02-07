import React, { useContext } from "react";
import { MyLangContext } from "../../../context/myLangContext";
import './HouseDeatilStyle.scss'
function GalleryHouseDetail({list4,listB4} ) {
  console.log('aqui tiene q salir algo',list4);  
  console.log('esto solo pa religiones', listB4[0]);
  const {t}=useContext(MyLangContext)
  return (
      <div className="background-house">
        {list4.length>0&& list4.map((items, index) => (
          <div  key={index}>
            <div className="div-principal">{/* div principal*/}
              <div>{/* img nombre*/}
                <div><img src={items?.image} alt={items?.name}></img></div>
                <div className="house-name"><h2 className="name">{items.name}</h2></div>
                </div>
              <div className="information">{/* div informacion*/}
              <div className="information-text">{/* div lema*/}
                <h3 className="information-text-title">{t('Lema')}</h3>
                <p>{items.words}</p>
              </div>
              <div className="information-text">{/* div sede*/}
              <h3>{t('Headquarters')}</h3>
              <p>{items.seat}</p>
              </div>
              <div className="information-text">{/* div region*/}
              <h3>{t('Region')}</h3>
              <p>{items.region}</p>
              </div>
            
              <div className="information-text">{/* div RELIGIONES*/}
              
              {listB4.length> 0&& listB4[0].map((items2, index) => (
                <div className="Religion-and-alliance" key={index}>
                <div className="religion-aliance">
                <h3>{t('Religion')}</h3>
                <p>{items2.religion}</p>
                </div>
                
                <div className="religion-aliance">{/* div alianzas*/}
              <h3>{t('Allegiance')}</h3>
              <p>{items2.allegiance}</p>
              </div>
                </div>
                

              ))}
              </div>
              <div className="information-text">{/* div RELIGIONES*/}
              <h3>{t('Fundation')}</h3>
              <p >{items.createdAt && items.createdAt.substring(0,10).split('-').reverse().join('/') }</p>
              </div>
              </div>

            </div>
              
          </div>
          
        )
        )
        }
      </div>
    )
  }
  export default GalleryHouseDetail
  // .split('-').reverse().join('/'));