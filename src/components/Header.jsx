import React, { useState } from 'react'

function Header() {
    const [toggle,setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
      <div>
          <ul className='hidden md:flex justify-center gap-x-5 p-7 bg-indigo-100'>
              <li className='font-bold hover:scale-125 transition duration-500 hover:text-zinc-500'><a href="/">Home</a></li>
              <li className='font-bold hover:scale-125 transition duration-500 hover:text-zinc-500'><a href="/">About</a></li>
              <li className='font-bold hover:scale-125 transition duration-500 hover:text-zinc-500'><a href="/">Contact</a></li>
          </ul>

          {/*Mobile view */}
          <div className='md:hidden'>
              <button onClick={handleToggle}>{toggle? "X" : "☰"}</button>
              {toggle &&
                <ul className='flex flex-col items-center gap-y-3 p-7 bg-indigo-100 transition duration-1000'>
                <li className='font-bold hover:scale-125 transition duration-500 hover:text-zinc-500'><a href="/">Home</a></li>
                <li className='font-bold hover:scale-125 transition duration-500 hover:text-zinc-500'><a href="/">About</a></li>
                <li className='font-bold hover:scale-125 transition duration-500 hover:text-zinc-500'><a href="/">Contact</a></li>
            </ul>
            }
          </div>
    </div>
  )
}

export default Header