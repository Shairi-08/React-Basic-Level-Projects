import React, { useState } from 'react';
import data from './Data';
import './Style.css';

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    setMultiple((prevMultiple) => {
      const cpyMultiple = [...prevMultiple];
      const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
      if (findIndexOfCurrentId === -1) {
        cpyMultiple.push(getCurrentId);
      } else {
        cpyMultiple.splice(findIndexOfCurrentId, 1);
      }
      return cpyMultiple; // Return the new state
    });
  };

  console.log(multiple);

  return (
    <div className='acc-wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div key={index} className='item'>
              <div
                className='title'
                onClick={enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? 
                multiple.indexOf(dataItem.id) !== -1 && <div className='acc-content'>
                {dataItem.answer}
              </div> :
              selected === dataItem.id && <div className='acc-content'>
              {dataItem.answer}
            </div>
              }
            </div>
          ))
        ) : (
          <div>No Data Present</div>
        )}
      </div>
    </div>
  );
};

export default Index;