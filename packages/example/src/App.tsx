import { useState, useEffect } from 'react';
// import './styles.css';
import VirtualScroll from 'use-virtualized';

const colors = ['red', 'green', 'blue', 'yellow'];

let i = 0;
const itemsCount = 1000
const itemHeight = 80

const UnstableItems = (props: { id: number }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => prev + 1);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[(colorIndex + 1) % colors.length],
        width: '100%',
        height: `${itemHeight}px`,
        border: '1px solid #e7e7e7',
        boxSizing:'border-box'
      }}
    // className='v-item-wrapper'
    >
      Item Children {props.id}
    </div>
  )
}


function App() {
  const [children, setChildren] = useState([...new Array(itemsCount)].map((_, i) => <div key={i}><UnstableItems id={i} /></div >))

  const handleAdd = () => {
    setChildren(prev => [...prev, ...new Array(itemsCount).fill(<div key={i}><UnstableItems id={i++} /></div >)])
  }


  return (
    <>
      <button
        onClick={() => {
          handleAdd();
        }}>
        click to add 100
      </button>
      <div
        style={{
          backgroundColor: '#f7f7f7',
          width: '420px',
          height: '560px',
          border: '3px solid black',
        }}>
        <VirtualScroll
          itemHeight={itemHeight}
          contentHeight={560}
          items={children}
          onScrollMax={handleAdd}
        />
      </div>
    </>
  );
}

export default App;
