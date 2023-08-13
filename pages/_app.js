import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { Akatab, Paytone_One } from 'next/font/google'

const akatab = Akatab({
    weight: '400',
    variable: '--font-akatab',
    subsets: ['latin'],
    display: 'swap',

})

const paytoneOne = Paytone_One({
    weight: '400',
    variable: '--font-paytone-one',
    subsets: ['latin'],
    display: 'swap',

})

export default function App({ Component, pageProps }) {
    return <main className={`${akatab.variable} ${paytoneOne.variable}`}>
        <Component {...pageProps} />
    </main>
}
