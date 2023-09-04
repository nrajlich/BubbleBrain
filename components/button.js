export default function Button({ theme = "blue", children }) {
    const themestyles = theme === "blue"
        ? "bg-blue-600 hover:bg-blue-500 text-white"
        : "bg-white hover:bg-gray-100 text-blue-700";

    return <button className={`text-md py-2 w-60 rounded ${themestyles}`}>{children}</button>
}

