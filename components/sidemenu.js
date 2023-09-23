import Iconb from "./iconb"
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

export default function Sidemenu() {
  return (

    <Menu
   
      right
      className='bg-white' width={'100%'}
      itemListClassName="relative flex flex-col gap-3 font-akatab justify-center items-center"
      customBurgerIcon={<svg fill="currentColor" className="w-8 h-8" viewBox="0 0 15 15 " xmlns="http://www.w3.org/2000/svg">
        <path d= "M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>}>
<div className="absolute top-0 left-0 shadow-xl w-full py-4"><Iconb></Iconb></div>
      <Link id="home" className="menu-item  hover:text-gray-400" href="/courses">Courses</Link>
      <a id="about" className="menu-item   hover:text-gray-400" href="/about">My Learning</a>
      <a id="contact" className="menu-item   hover:text-gray-400" href="/instructor">Instructor</a>
      <a className="hover:text-gray-400 cursor-pointer  text-gray-700" href="/login">Login</a>
      <a className="bg-pink-400 hover:bg-pink-300 text-white py-1 cursor-pointer px-3 rounded-full"  href="/login">Sign Up</a>


    </Menu>
  );
}