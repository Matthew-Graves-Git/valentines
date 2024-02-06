import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [count, setCount] = useState(0);
  const [msg, setmsg] = useState("No");
  const text = () => {
    let c = count+1;
    setCount(count+1);
    switch(c){
      case 1:
        setmsg("Ha Ha try again");
        break;
      case 2:
        setmsg("very funny come on now");
        break;
      case 3:
        setmsg("maybe you missed the other button");
        break;
      case 4:
        setmsg("okay this is serious");
        break;
      case 5:
        setmsg("pleasseeeeeeeeee");
        break; 
      default:
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        break; 
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center flex-col bg-pink-300">
    {!accepted &&
    <div className="h-auto w-screen flex justify-center  flex-col bg-pink-300">
      <div className='w-[80vw] mx-auto mt-20 mb-10 h-full flex justify-center align-middle'>
      <h1 className='text-6xl text-pink-800 font-bold'>
        Will you be my Valantine?
      </h1> 
      </div>
      <div className='w-[80vw]  mb-10 h-[80vw] mx-auto relative'>
        <div className='w-[80vw] h-[80vw] absolute bg-transparent top-0 z-10'></div>
        <iframe className='w-[80vw] h-[80vw] flex'src="https://giphy.com/embed/JTbsN6f3FDafoQZkpy"  frameBorder="0" ></iframe>
      </div>
      <div className='flex w-[80vw] mx-auto h-full mb-20 text-white'>
          <button style={{height:`${80*(count+1)}px`, fontSize:`${36*(count+1)}px`}} className='w-1/2 text-4xl rounded-lg bg-green-600 cursor-pointer' onClick={() =>{setAccepted(true)}}>Yes</button>
          <button className='w-1/2 h-20 text-4xl rounded-lg bg-red-600 cursor-pointer' onClick={() =>{text()}}>{msg}</button>
      </div>
      </div>
    }
    {
      accepted && <p className='w-screen text-8xl text-white ml-[45%]'>YAY</p>
    }
    </div>
  );
}

export default App;
