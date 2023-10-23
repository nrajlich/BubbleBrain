import Footer from '../components/footer'
import Navbar from '../components/navbar'
import cardList from '../data'
import Searchbar from '../components/searchbar'

export default function courses() { return <>
    <Navbar></Navbar>

    <main className='container mx-auto px-8 pb-24'>
    <div className='pb-14 pt-24 flex justify-center'><Searchbar/></div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {cardList.map(card =>( 
                    <div className='shadow-lg rounded-lg'>
                
                    <div> <img className="rounded-t-lg" src={card.img} alt=""/>
                    <div className='p-5'>
                    <h3 className='font-bold text-lg text-slate-700 mb-3'>{card.title}</h3>
                    <p className='font-normal text-gray-600'>{card.text}</p>
                    </div>
                    </div>
                </div>))}
                </div>
                </main>
    <Footer></Footer>
    
</>
}
