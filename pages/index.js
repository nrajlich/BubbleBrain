import LandingSection from '../components/landingsection'
import Heading from '../components/heading'
import Button from '../components/button'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export default function () {
    return<>
        <Navbar></Navbar>

        <div className="bg-blue-200 py-24 flex justify-center">
            <div className='flex lg:flex-row-reverse flex-col md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
                <div className="flex justify-center">
                    <img className="py-3 px-4 md:object-contain w-4/5 lg:w-full" src="images/bubble3.png" alt="bubble brain" />
                </div>
                <div className="flex justify-center flex-col lg:pr-32">
                    <Heading className="text-center md:text-center">Welcome to Bubble Brain</Heading>
                    <p className="text-center text-md px-3 py-6 md:text-center  text-gray-800"> A digital space that provides free access to knowledge and skill-building
                        resources in graphic design, visual aesthetics, and web design.</p>
                    <div className="justify-center items-center flex flex-col lg:flex-row gap-2">
                        <Button>Get Started</Button>
                        <Button theme="white">I already have an account</Button>
                    </div>

                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center md:text-left'>
            <LandingSection
                reverse
                title="Unleash your creativity"
                description="Whether you're a seasoned designer or just getting started, learn design elements from fun tutorials and brush up your skills. Let's transform ideas into compelling visuals together!"
                imageSrc="/images/graphic-design.png"
            ></LandingSection>

            <LandingSection
                title="Design. Develop. Deliver."
                description="Web design is more than building websites—it's crafting experiences.
            Discover resources on UX/UI design and coding tutorials. 
            Together we will create functional, aesthetic, and user-friendly websites."
                imageSrc="/images/web-design.png"
            ></LandingSection>

            <LandingSection
                reverse
                title="Essential Aesthetics"
                description="Optimize your design workflow and expand your knowledge about color harmonies, grid layouts,and typographical hierarchy. A fun blend of art, design, and efficiency awaits."
                imageSrc="/images/hand.png"
                customClass="md:h-[380px]"
            ></LandingSection> </div>
             
            <Footer></Footer>


            </> }
