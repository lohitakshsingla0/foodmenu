import React from 'react';
import './card.css'


const CardApp=({cardData})=>{
  return (
    
    cardData.map((attribute) => (
      
      <div class="card">
        <div class="card__header">
          <img src={attribute.strCategoryThumb} alt="card__image" class="card__image" width="600"></img>
        </div>
        <div class="card__body">
          <span class="tag tag-blue">Food</span>
          <h4>{attribute.strCategory}</h4>
          <p>{attribute.strCategoryDescription}</p>
        </div>
        <div class="card__footer">
          <div class="user">
            <div class="user__info">
              <h5>By Lohit</h5>
              
            </div>
          </div>
        </div>
      </div>
     
   
    ))
   
  );
}

export default CardApp;