import Footer from '../components/footer'
import Navbar from '../components/navbar'
import cardList from './data';

export default function courses() { return <>
    <Navbar></Navbar>
    <main className='container mx-auto py-36 px-8'>
                <div className="grid lg:grid-cols-3">
                {cardList.map(card =>( 
                    <div> <img src={card.img} alt=""/>

                </div>))}
                </div>
                </main>
    <Footer></Footer>
    
</>
}
