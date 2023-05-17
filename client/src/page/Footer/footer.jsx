import React from 'react';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div>
            <section className="text-gray-600 body-font " id='about'>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center  mb-20">
                        <img src="mp.png" className=' w-52 justify-center items-center mx-auto object-cover object-center flex-shrink-0 rounded-full ' alt="" />
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">About</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">In today's digital era, visuals play a crucial role in capturing attention and conveying information effectively. Whether it's for websites, social media, marketing campaigns, or any creative project, high-quality and eye-catching images are in high demand. However, creating original images can be time-consuming, expensive, and require specialized design  is an innovative platform that leverages the power of artificial intelligence (AI) to generate stunning, unique images based on text inputs. With just a simple description or a few keywords, you can now bring your ideas to life visually, without the need for complex design tools or professional graphic designers.</p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-7">How does ai work? Using advanced deep learning algorithms, AI analyzes the provided text and extracts key elements, concepts, and context. It then applies its vast knowledge and understanding of visual aesthetics to generate custom images that align with your description.</p>

                        {/* <span class="inline-flex justify-center items-center mt-3">
                            <a class="text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-2 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-2 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                        </span> */}
                       

                    </div>

                </div>
            </section>





            <div className="">
                <div className="container px-5 py-16 mx-auto flex items-center sm:flex-row flex-col">
                    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="logo.png" className=' w-10  h-10 mr-32 -mr-2' alt="logo" />

                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 AI Images Generation — <span className=' text-black'>By Raviraj Singh</span>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link className="text-gray-500 hover:text-black">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-black">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-black">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500 hover:text-black">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </Link>
                    </span>
                </div>
            </div></div >

    )
}

export default footer