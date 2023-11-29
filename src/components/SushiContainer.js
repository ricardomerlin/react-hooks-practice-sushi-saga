import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushiList, bringMoneyUp, money, setSushiList }) {

  const[bottomSushi, setBottomSushi] = useState(0)
  const[topSushi, setTopSushi] = useState(4)

  const mappedSushi = sushiList.filter((sushi, index) => index > bottomSushi && index <= topSushi ).map((sushi) => <Sushi key={sushi.id} sushi={sushi} bringMoneyUp={bringMoneyUp} money={money} /> )


  function handleMore () {
    setBottomSushi(bottomSushi + 4)
    setTopSushi(topSushi + 4)
    if (topSushi >= 100) {
      setBottomSushi(0)
      setTopSushi(4)
    }
  }

  console.log(mappedSushi)

  return (
    <div className="belt">
      {mappedSushi}
      <MoreButton handleMore={handleMore} />
    </div>
  );
}


export default SushiContainer;
