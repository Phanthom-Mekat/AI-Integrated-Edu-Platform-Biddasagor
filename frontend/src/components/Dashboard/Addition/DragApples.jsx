import { useState } from 'react';

const DragApples = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  // Handle drag start and store data
  const handleDragStart = (event, data) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
  };

  // Allow dropping by preventing default behavior
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle the drop event
  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const parsedData = JSON.parse(data);

    setDroppedItems((prevItems) => [...prevItems, parsedData]);
  };

  // Handle when dragging ends
  const handleDragEnd = (event, index) => {
    // Check if the item is outside the drop area and remove it
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDroppedItems((prevItems) => prevItems.filter((_, i) => i !== index));
    }
  };

  // Count apples in dropped items
  const appleCount = droppedItems.filter((item) => item.type === 'image').length;

  return (
    <div className="flex space-x-4">
      {/* Drag Source */}
      <div className="w-[500px] p-4 flex gap-12">
        <div className="flex flex-col">
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, { type: 'image', src: '/apple.webp' })}
            className="p-2 mb-2 border cursor-move flex flex-col gap-9 rounded-lg "
          >
            <div className="flex ">
              <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
              <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
              <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
            </div>
            <div className="flex">
              <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
              <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
              <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">6 Apples</h1>
        </div>

        <div className="flex flex-col">
        
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, { type: 'image', src: '/apple.webp' })}
            className="p-2 mb-2 border cursor-move flex rounded-lg"
          >
            
            <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
            <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
            <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
          </div>
            <h1 className='text-xl font-bold text-center'>3 Apples</h1>
          <h1 className="text-5xl font-bold text-center">+</h1>
          <h1 className='text-xl font-bold text-center'>2 Apples</h1>

          <div
            draggable
            onDragStart={(e) => handleDragStart(e, { type: 'image', src: '/apple.webp' })}
            className="p-2 mb-2 border cursor-move flex rounded-lg"
          >
            <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
            <img src="/apple.webp" alt="Example" className="w-1/3 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold">=</h1>
      </div>

      {/* Drop Target */}
      <div
        className="w-[300px] flex flex-col p-4 border rounded-lg"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={(e) => handleDragEnd(e, 0)} // Remove apple when dragged outside
      >
        {/* Show the apple count */}
        <div className="mb-4 text-2xl font-semibold">
          Apples Count: {appleCount}
        </div>

        <div className="flex flex-wrap">
          {droppedItems.map((item, index) => (
            <div
              key={index}
              className="mt-2 w-1/3"
              onDragEnd={(e) => handleDragEnd(e, index)} // Remove apple from list when dragged out
            >
              {item.type === 'image' ? (
                <img src={item.src} alt="Dropped" className="rounded-full w-2/3" />
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Warning if more than 5 apples */}
        {appleCount < 5 && (
          <p className="mt-4 text-pink-500 font-bold text-2xl">Add more apples !</p>
        )}
        {appleCount === 5 && (
          <p className="mt-4 text-green-500 font-bold text-2xl">Now this is perfect !</p>
        )}
        {appleCount > 5 && (
          <p className="mt-4 text-red-500 font-bold text-2xl">Oops! You have added a lot of apples. You have to remove some apples now!</p>
        )}
      </div>
    </div>
  );
};

export default DragApples;
