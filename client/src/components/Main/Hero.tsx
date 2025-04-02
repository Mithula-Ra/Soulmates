import React from 'react';

interface HeroProps {
    url: string; 
    title: string;
    subTitle?: string;
    children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ url, title, subTitle, children }) => {
    return (
        <div className="relative flex flex-col rounded-lg justify-between w-full min-h-[200px] bg-purple-50 p-2">
            <img 
                src={url} 
                alt="Game Image" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg" 
            />
            <div 
                 className="absolute rounded-lg inset-0 bg-gradient-to-r from-transparent to-black opacity-90"
            ></div>
            <div 
                 className="absolute w-2 h-2 rounded-full top-8 right-6 bg-red-600"
            ></div>

            <div className="relative text-white p-6 z-10">
                <div className='text-3xl md:text-4xl font-extralight text-right'>{title}</div>
                {subTitle && <div className='text-base md:text-lg font-thin text-right text-gray-400'>{subTitle}</div>}
            </div>
            <div className='relative'>
                {children}
            </div>
        </div>
    );
};

export default Hero;
