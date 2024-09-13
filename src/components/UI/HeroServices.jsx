/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const HeroServices = () => {
    return (
        <>
            {/* <!-- Hero --> */}
            <div class="relative rounded-lg overflow-hidden before:absolute before:top-0 before:start-1/2 bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] bg-no-repeat bg-top :bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                    {/* <!-- Title --> */}
                    <div class="mt-5 max-w-4xl text-center mx-auto">
                        <h1 class="block font-bold text-black text-4xl md:text-5xl lg:text-6xl tracking-tight">
                            Our Restaurant 
                            <span class="bg-clip-text bg-gradient-to-tl from-red-400 to-red-600 text-transparent"> Services</span>
                        </h1>
                    </div>
                    {/* <!-- End Title --> */}

                    <div class="mt-5 max-w-5xl text-center mx-auto">
                        <p class="text-lg text-gray-600 dark:text-neutral-400">
                        From dine-in and takeout to catering for special events, we offer a wide range of services designed to meet all your dining needs. 
                        Experience the finest flavors and exceptional service at your convenience.
                        </p>
                    </div>

                    {/* <!-- Buttons --> */}
                    <div class="mt-8 gap-3 flex justify-center">
                        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-red-400 to-red-600 hover:from-red-600 hover:to-red-400 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-red-600 focus:to-red-400 py-3 px-28" href="#">
                            Get started
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </div>
                    {/* <!-- End Buttons --> */}
                </div>
            </div>
            {/* <!-- End Hero --> */}
        </>
    )
}

export default HeroServices