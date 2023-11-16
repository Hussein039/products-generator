import React from 'react';

function ItemGenerateButton({ onClick }) {
    
  return (
    <button onClick={onClick} className=' px-4 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white  focus:outline-none focus:ring focus:ring-green-100  shadow-2xl shadow-indigo-500 drop-shadow-lg   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150 '>Random</button>
  )
}

export default ItemGenerateButton;