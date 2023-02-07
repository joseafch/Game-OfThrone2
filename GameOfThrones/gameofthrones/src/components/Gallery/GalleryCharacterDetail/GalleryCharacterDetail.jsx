import React, { useContext } from "react";
import { MyLangContext } from "../../../context/myLangContext";
import "./GalleryCharacterStyle.scss"

function GalleryCharacterDetail( {list5, listB5} ) {
  console.log("aqui tiene q salir algo", list5);
  console.log("aqui tiene que salir el escudo", listB5)
  const {t}=useContext(MyLangContext)
  return (
    <div>
      {/* <img src={listB5.image} alt="{listb5}"></img> */}
      {/* <div>{list5.house === listb5[0].name && <img src={listb5[0].image} alt="NoHome"/>}</div> */}
     {list5.length > 0 && list5.map((person, index) => (
          <figure className="figure-box" key={index}>
            <div className="topBox">
              <img className="image-person" src={person?.image} alt={person.name}></img>
              <h2 className="name">{person.name}</h2>
            </div>
            <div className="botBox">
              
              <div className="botBox__field1"><h3>{t("House")}</h3><img src={listB5.image} alt="NoHome"/></div>
              <div className="botBox__field"><h3>{t("Alliances")}</h3><p>{person.allegiances}</p></div>
              <div className="botBox__field"><h3>{t("Appearances")}</h3><p>{person.appearances}</p></div>
              <div className="botBox__field"><h3>{t("Father")}</h3><p>{person.father}</p></div>
              <div className="botBox__field"><h3>{t("Siblings")}</h3><p>{person.siblings}</p></div>
              <div className="botBox__field"><h3>{t("Titles")}</h3><p>{person.titles}</p></div>
            </div>
          </figure>
        ))}
    </div>
  );
}
export default GalleryCharacterDetail;
