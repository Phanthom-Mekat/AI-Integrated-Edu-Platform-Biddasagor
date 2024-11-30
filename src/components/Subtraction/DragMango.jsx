import { useState } from 'react';

const DragMango = () => {
  const initialMangoes = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    type: 'image',
    src: '/mango.png',
  }));

  const [droppedItems, setDroppedItems] = useState(initialMangoes);
  const [removedItems, setRemovedItems] = useState([]);

  const handleDragStart = (event, data) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
    event.currentTarget.classList.add('dragging');
  };

  const handleDragEnd = (event) => {
    event.currentTarget.classList.remove('dragging');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const parsedData = JSON.parse(data);

    setDroppedItems((prevItems) => {
      if (!prevItems.find((item) => item.id === parsedData.id)) {
        return [...prevItems, parsedData];
      }
      return prevItems;
    });

    setRemovedItems((prevItems) =>
      prevItems.filter((item) => item.id !== parsedData.id)
    );
  };

  const handleRemoveDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const parsedData = JSON.parse(data);

    setRemovedItems((prevItems) => {
      if (!prevItems.find((item) => item.id === parsedData.id)) {
        return [...prevItems, parsedData];
      }
      return prevItems;
    });

    setDroppedItems((prevItems) =>
      prevItems.filter((item) => item.id !== parsedData.id)
    );
  };

  const mangoCount = droppedItems.length;
  const removedCount = removedItems.length;

  return (
    <div className="flex  ">
      {/* Drag Sources */}
      <div className="w-[500px] flex gap-2 ">
        <div className="flex flex-col w-1/2  p-2 rounded-lg">
          <div
            draggable
            onDragStart={(e) =>
              handleDragStart(e, { id: 'source1-mango1', type: 'image', src: '/mango.png' })
            }
            className="p-2 mb-2 border cursor-move flex flex-wrap gap-2 rounded-lg"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src="/mango.png"
                alt="Mango"
                className="w-16 h-16 rounded-full"
              />
            ))}
          </div>
          <h1 className="text-xl font-bold text-center">5 Mangoes</h1>
        </div>

        <div className='flex py-5'>
            <span className='text-6xl font-bold'>-</span>
        </div>

        <div className="flex flex-col w-1/4  p-2 rounded-lg">
          <div
            draggable
            onDragStart={(e) =>
              handleDragStart(e, { id: 'source2-mango1', type: 'image', src: '/mango.png' })
            }
            className="p-2 mb-2 border cursor-move flex flex-wrap gap-2 rounded-lg"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <img
                key={index}
                src="/mango.png"
                alt="Mango"
                className="w-16 h-16 rounded-full"
              />
            ))}
          </div>
          <h1 className="text-xl font-bold text-center">2 Mangoes</h1>
        </div>
        <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold">=</h1>
      </div>
      </div>

      

      {/* Drop Target */}
      <div
        className=" flex flex-col p-4 border rounded-lg mr-3"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="mb-4 text-2xl font-semibold">
          Mangoes Count: {mangoCount}
        </div>

        <div className="flex flex-wrap">
          {droppedItems.map((item) => (
            <div key={item.id} className="mt-2 w-1/3">
              <img
                src={item.src}
                alt="Dropped Mango"
                className="rounded-full w-16 h-16 cursor-move"
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
              />
            </div>
          ))}
        </div>
        <div className='py-5'>
            {mangoCount >3 &&
                <p className='text-red-600 font-bold text-xl'>Drop Mangoes!</p>
                
                
            }
             {mangoCount ===3 &&
                <p className='text-green-600 font-bold text-xl'>This looks perfect!</p>
            }
             {mangoCount <3 &&
                <p className='text-blue-600 font-bold text-xl'>Add Mangoes!</p>
                
                
            }
        </div>
      </div>

      {/* Remove Area */}
      <div
        className=" flex flex-col p-4 border-2 border-red-500 rounded-lg"
        onDragOver={handleDragOver}
        onDrop={handleRemoveDrop}
      >
        <h2 className="text-lg font-bold text-center text-red-500">
          Dropped Mangoes ({removedCount})
        </h2>
        <div className="flex flex-wrap justify-center mt-2">
          {removedItems.map((item) => (
            <div key={item.id} className="mt-2 w-1/3">
              <img
                src={item.src}
                alt="Removed Mango"
                className="rounded-full w-16 h-16 cursor-move"
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragMango;
