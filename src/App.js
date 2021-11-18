import React, { useState } from 'react';
import './App.css';
import MoveableDiv from './components/MoveableDiv';

function App() {

  const [items, setItems] = useState({
    data: {
      items: {
        movableItem: {
          totalItem: 2,
          itemList: {
            [`item-1`]: {
              h: 10,
              w: 20,
              x: 0,
              y: 0
            },
            [`item-2`]: {
              h: 10,
              w: 20,
              x: 40,
              y: 10
            }
          }
        }
      }
    }
  })

  const itemList = items.data.items.movableItem.itemList;
  const itemValues = Object.values(itemList);
  return (
      <div className="App">
        {
          itemValues.map((item, index) => <MoveableDiv key={index} item={item} index={index} />)
        }
      </div>
  );
}

export default App;
