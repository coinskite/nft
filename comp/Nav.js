import { useState } from 'react';
import Link from 'next/link';
import Search from '../svgs/nav/search.svg';
import Cross from '../svgs/nav/cross.svg';
import Arrow from '../svgs/nav/arrow.svg';

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`df nav-bar py-4 ${open ? "active" : ""}`}>
      <div className='mr-auto nav-item-1'>
        <img src="./assets/nav/logo.png" alt="logo" className='w-40' />
      </div>

      <div className='df nav-search rounded-full py-1 px-2 gap-2'>
        <input
          type="text"
        />
        <Search />
      </div>

      <div className="hidden lg:flex gap-4 nav-item-3 w-full lg:w-auto">
        <Link href="/auction">Auction</Link>
        <div className='py-2 lg:py-0 text-sm df justify-between border-b border-[rgba(255,255,255,.3)] lg:border-0'><p>Explorer</p> <Arrow className="lg:hidden" /></div>
        <div className='py-2 lg:py-0 text-sm df justify-between border-b border-[rgba(255,255,255,.3)] lg:border-0'><p>Market</p> <Arrow className="lg:hidden" /></div>
        <div className='py-2 lg:py-0 text-sm df justify-between border-b border-[rgba(255,255,255,.3)] lg:border-0'><p>Trading</p> <Arrow className="lg:hidden" /></div>
        <div className='py-2 lg:py-0 text-sm df justify-between border-b border-[rgba(255,255,255,.3)] lg:border-0'><p>NFT Creator</p> <Arrow className="lg:hidden" /></div>
      </div>

      <div className="hidden md:flex gap-2 items-center nav-item-4">
        <p className='block md:hidden mb-4'>Let's get started</p>
        <button className='bg-primary px-8 py-2 min-w-[300px] md:min-w-max md:px-4 md:py-1 text-sm rounded-lg'>Connect wallet</button>
        <button className='bg-primary px-8 py-2 min-w-[300px] text-sm rounded-lg df justify-center gap-0 md:hidden'>Notification <img src="./assets/nav/bell.png" alt="bell" className="w-6" /></button>
        <img src="./assets/nav/bell.png" alt="bell" className="w-8 hidden md:block" />
      </div>

      <div className='hidden nav-item-2 ml-auto cursor-pointer' onClick={() => setOpen(p => !p)}>
        <Cross className="w-8" />
      </div>

      <div
        className='md:hidden cursor-pointer nav-item-last'
        onClick={() => setOpen(p => !p)}
      >
        <img src="./assets/nav/navigation.png" alt="hamburger" />
      </div>
    </nav>
  )
}

export default Nav