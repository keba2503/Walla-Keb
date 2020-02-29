import React from 'react';
import { Link } from "react-router-dom";


export default class Adcard extends React.Component {
  state = {
    ads: this.props.data,
  };

  ad = this.state.ads.map((ad) => {
    return (

  <li key className="cards__item">
    <div className="card">
      <div className="card__image"> <img src={ad.photo} alt="AdImage" /></div>
      <div className="card__content">
        <div className="card__title"><h2>{ad.name}</h2></div>
        <p className="card__text"> <h2>Descriptión:</h2> {ad.description}  <hr/>
        <p><h3>Precio:{ad.price} </h3> </p>
          <p><h3>Tipo:  {ad.type}</h3> </p>
        Perspiciatis doloribus distinctio, ducimus at labore voluptatum iure impedit.
         Officia ratione corrupti facere porro eaque suscipit, iure esse in, sit dolore doloribus!  
        
         </p>
         <Link to={`/detail/${ad._id}`}>
        <button className="btn btn--block card__btn">Detail</button>
        </Link>
      </div>
    </div>
  </li>           
    );
  });

  render() {
    return <div className="cards">{this.ad}</div>;
  }
}



