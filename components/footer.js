function Footeritem(props) {
    return <li className="hover:text-gray-400 cursor-pointer" >
        <a>{props.children}</a>
    </li>
}


export default function Footer(props) {
    return <div className="bg-blue-200 flex flex-col justify-center items-center px-24 text-base py-3">
        <div className="items-center hidden md:flex text-gray-700">
            <img src="images/bubble4.png" />
        </div>

        <ul className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-gray-700 py-5">
            <Footeritem>About</Footeritem>
            <Footeritem>FAQs</Footeritem>
            <Footeritem>Terms and conditions</Footeritem>
            <Footeritem>Privacy Policy</Footeritem>
            <Footeritem>Instructor</Footeritem>
        </ul>

        <div className="text-xs">All rights revserved Nayama Rajlich ©</div>
    </div>
}