import React from "react";
import ComponentQuote from "./components/ComponentQuote";
import ComponentWoodBlocks from "./components/ComponentWoodBlocks";


// import woodbackground from './wood_background.jpg';

const AboutSection1 = props => {
    return (
        <div className="bg-gray-300">
            {/* Header */}
            {/* <div className="w-full h-full bg-1  bg-contain bg-no-repeat sm: bg-1 bg-auto bg-right "> */}
            <div className="pb-52 pt-52 bg-1 bg-cover bg-center bg-no-repeat">
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    {/* <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">About</h1> */}
                    {/* <p className="mt-6 text-xl text-gray-300">
                    Our main focus is to provide you with an outstanding service. Transforming your floor whether it be 5 years old, 100 years old, or brand new, into the beautiful piece of art it has the potential to be.
                    </p> */}
                </div>
                <div className="mb-60"></div>
            </div>
            <div className="pt-2 bg-gray-200 "></div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                {/* <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2> */}
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">

                    <div key='1' className="flex flex-col bg-white rounded-2xl shadow-xl">
                        <div className="flex-1 relative pt-8 px-6 pb-10 md:px-8">
                            <h3 className="text-xl font-medium text-gray-900">Get Online Quote</h3>
                            <ComponentQuote />
                        </div>
                    </div>

                    <div key='2' className="col-span-2 flex flex-col bg-white rounded-2xl shadow-xl">
                        <div className="flex-1 relative pt-8 px-6 pb-10 md:px-8">
                            {/* <ComponentWoodBlocks /> */}
                        </div>
                        <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutSection1;