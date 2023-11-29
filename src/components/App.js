import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const[sushiList, setSushiList] = useState([])
const[money, setMoney] = useState(100)
const[plates, setPlates] = useState([])

function bringMoneyUp(cash) {
  setMoney(money - cash)
  setPlates([...plates, 1])
  console.log(plates)
}

function depositCash(addDough) {
  setMoney(money + parseInt(addDough))
}

console.log(money)

useEffect(() => {
  fetch (API) 
  .then(res => res.json())
  .then(data => {
    setSushiList(data)
  })
}, [])

console.log(sushiList)

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} bringMoneyUp={bringMoneyUp} money={money} setSushiList={setSushiList} />
      <Table money={money} depositCash={depositCash} plates={plates} />
    </div>
  );
}

export default App;
