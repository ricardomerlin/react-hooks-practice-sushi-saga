import React, { useState } from "react";

function Sushi({ sushi, bringMoneyUp, money, setSushiList }) {


  console.log(sushi)

  function handleClick (e) {
    e.preventDefault()
    const cash=sushi.price
    if (money >= cash) {
    bringMoneyUp(cash)
    }
    console.log(sushi.id)
    if (e.target.style.display === 'block' && money >= cash) {
      e.target.style.display = 'none'
    }
    fetch ("http://localhost:3001/sushis/" + sushi.id, {
      method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className="sushi">
      <div className="plate"  >
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
            style={{display: 'block'}}
            onClick={handleClick}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
