export default function Heading2(props) {
    return <h2 {...props} className={`text-blue-600 text-xl font-bold font-paytone-one md:text-3xl lg:text-4xl md:text-left px-3 py-3 ${props.className}`} />
}