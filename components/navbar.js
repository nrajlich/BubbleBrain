import Link from 'next/link';
import { useRouter } from 'next/router';
import Iconb from "./iconb";
import Sidemenu from "./sidemenu";

export function Navbaritem(props) {
    const router = useRouter();
    const isActive = router.pathname === props.href;
    
    return (
        <li className={`cursor-pointer ${isActive ? 'text-gray-400' : 'hover:text-gray-400'}`}>
            <Link {...props}>{props.children}</Link>
        </li>
    );
}

export default function Navbar(props) {
    return (
        <div className="relative shadow-xl flex justify-between sm:px-10 lg:px-24 text-base py-3">
            <div className="items-center flex text-gray-700"><Iconb></Iconb></div>

            <ul className="gap-5 items-center md:flex hidden text-gray-700">
                <Navbaritem href="/">Home</Navbaritem>
                <Navbaritem href="/courses">Courses</Navbaritem>
                <Navbaritem href="/mylearning">My Learning</Navbaritem>
                <Navbaritem href="/instructor">Instructor</Navbaritem>
            </ul>

            <div className="md:flex hidden gap-4 items-center">
                <a className="hover:text-gray-400 cursor-pointer text-gray-700">Login</a>
                <a className="bg-pink-400 hover:bg-pink-300 text-white py-1 cursor-pointer px-3 rounded-full">Sign Up</a>
            </div>

            <div className="flex md:hidden pr-5 text-gray-700 hover:cursor-pointer">
                <Sidemenu />
            </div>
        </div>
    );
}
