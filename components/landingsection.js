import Heading2 from "./heading2";

function LandingSection({ title, description, imageSrc, reverse = false, customClass = '' }) {
    const direction = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
    const margin = reverse ? 'md:ml-20' : 'md:mr-20';
    
    return (
        <div className={`md:w-5/6 flex flex-col md:flex-row items-center py-8 ${direction}`}>
            <div className={`text-center md:text-left md:mb-0 ${margin}`}>
                <Heading2>{title}</Heading2>
                <p className="text-gray-700 leading-relaxed py-3 px-3 text-base md:text-left">
                    {description}
                </p>
            </div>
            <img src={imageSrc} alt="" className={`w-48 md:w-80 md:h-80 md:max-w-xs object-contain object-center ${customClass}`} />
        </div>
    );
}

export default LandingSection;

