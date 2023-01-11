import React from 'react'

function Main() {
  return (
    <section className=' sm:grid grid-cols-[auto_1fr]'>
      {/* <button className='bg-primary px-8 py-2 rounded-full'>Filter</button> */}
      <div>
        <div>
          <input
            type="text"
            className='bg-inherit'
            placeholder='Search item'
          />
        </div>

        <div>
          price
        </div>

        <div>
          Filters
        </div>

        <div>
          <p className='df mb-4'><img className='w-10' src="./assets/auction/av1.png" alt="avatar" /> Invisible Friends</p>
          <p className='df mb-4'><img className='w-10' src="./assets/auction/av2.png" alt="avatar" /> WonderPals</p>
          <p className='df mb-4'><img className='w-10' src="./assets/auction/av3.png" alt="avatar" /> Howlerz</p>
          <p className='df mb-4'><img className='w-10' src="./assets/auction/av4.png" alt="avatar" /> Terraforms</p>
          <p className='df mb-4'><img className='w-10' src="./assets/auction/av5.png" alt="avatar" /> Bored Ape Yacht Club</p>
        </div>
      </div>

      <div className='h-[1000px] overflow-y-auto sm:h-auto flex flex-wrap gap-4 justify-evenly'>
        <img className='w-72' src="./assets/auction/1.png" alt="box" />
        <img className='w-72' src="./assets/auction/2.png" alt="box" />
        <img className='w-72' src="./assets/auction/3.png" alt="box" />
        <img className='w-72' src="./assets/auction/4.png" alt="box" />
        <img className='w-72' src="./assets/auction/1.png" alt="box" />
        <img className='w-72' src="./assets/auction/2.png" alt="box" />
        <img className='w-72' src="./assets/auction/3.png" alt="box" />
        <img className='w-72' src="./assets/auction/4.png" alt="box" />
        <img className='w-72' src="./assets/auction/1.png" alt="box" />
        <img className='w-72' src="./assets/auction/2.png" alt="box" />
        <img className='w-72' src="./assets/auction/3.png" alt="box" />
        <img className='w-72' src="./assets/auction/4.png" alt="box" />
      </div>
    </section>
  )
}

export default Main