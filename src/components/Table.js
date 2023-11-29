import React, { useState, useEffect } from "react";

function Table({ plates = [], money, depositCash }) {

const[addDough, setAddDough] = useState(0)

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

console.log(addDough)



  function handleSelect(e) {
    e.preventDefault()
    setAddDough(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    depositCash(addDough)
  }

  return (
    <>
      <h3 className="remaining" style={{textAlign: 'center'}}>
        You have ${money} remaining! Want to add more?
        <form onSubmit={handleSubmit} >$
          <select onChange={handleSelect}>
            <option value='0'>Select amount</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
          <button type='submit'>Add Now!</button>
        </form>
      </h3>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
