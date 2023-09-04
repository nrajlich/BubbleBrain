export default function Heading(props) {
    return <h1 {...props} className={`text-blue-600 text-2xl font-bold font-paytone-one md:text-4xl lg:text-6xl ${props.className}`} />
}
