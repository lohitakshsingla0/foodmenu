import React from 'react';
import './card.css';
//import { useState, useEffect } from 'react';


const  CardApp = ({cardData}) => {


  return (
    
	  
    
      
      <div class="card">
        
        <div class="card__header">
          <img src={cardData.strCategoryThumb} alt="card__image" class="card__image" ></img>
        </div>

        <div class="card__body">
          <span class="tag tag-blue">Food</span>
          <h4>{cardData.strCategory}</h4>
          <p>{cardData.strCategoryDescription}</p>
        </div>

        <div class="card__footer">
          <div class="user">
            <div class="user__info">
              <h5>By Lohit</h5>
            </div>
          </div>
        </div>

      </div>
     
   

   
  );
}

export default CardApp;