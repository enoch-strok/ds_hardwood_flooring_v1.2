import React from "react";

import image_1 from "./img/ds_hardwood_instagram_1.jpg";
import image_2 from "./img/ds_hardwood_instagram_2.jpg";
import image_3 from "./img/ds_hardwood_instagram_3.jpg";
import image_4 from "./img/ds_hardwood_instagram_4.jpg";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
    {
      title: 'Wide French oak engineered flooring. An excellent choice.',
      size: 'Ravensdale, WA',
      source:
        image_1,
    },
    {
      title: 'Refreshing a floor for a customer.',
      size: 'Seattle, WA',
      source:
        image_2,
    },
    {
      title: 'Do your floors need attention? We can help, if you’re in PNW don’t hesitate to get a free estimate',
      size: 'Tacoma, WA',
      source:
        image_3,
    },
    {
      title: 'Clients hires a “jack of all trades”, excited to show what a professional can do.',
      size: 'Bellevue, WA',
      source:
        image_4,
    },
    // More files...
  ]
  
  export default function Example() {
    return (
        <section
            className=" bg-gray-100  mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
        >
            <div className="pt-12"></div>
            <div  className="col-span-2 flex flex-col ">
                <div className="flex-1 relative pt-8 px-6 pb-10 md:px-8">
                    <h3 className="mb-24 text-5xl md:text-5xl font-bold mb-5 text-gray-600">Latest Posts</h3>
                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {files.map((file) => (
                            <li key={file.source} className="relative">
                                <div className="group block w-full aspect-w-10 aspect-h-7 shadow rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                    <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                                    <button type="button" className="absolute inset-0 focus:outline-none ">
                                        <span className="sr-only">View details for {file.title}</span>
                                    </button>
                                </div>
                                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
                                <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    
    )
  }