/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import { Helmet } from "./helmet/Helmet";
import { NewsLetter } from './UI/NewsLetter';
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";
import { Footer } from './UI/Footer';
import HeroAbout from './UI/HeroAbout';
import img1 from '../img/produk/produk_3.jpg';
import img2 from '../img/i1.png';
import img3 from '../img/produk/produk_1.jpeg';



const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: img1,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: img2,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: img3,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]



export const AboutPage = () => {

    const [{ foodItems, cartShow }, dispatch] = useStateValue();


    return (
        <Helmet title="About us">
            <HeroAbout />
            <div>
                <div className="bg-gray-100">
                    <div className="mx-auto">
                        <div className="py-16 mx-auto sm:py-24">
                            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                {callouts.map((callout) => (
                                    <div key={callout.name} className="relative group">
                                        <div className="relative w-full overflow-hidden bg-white rounded-lg group-hover:opacity-75">
                                            <img
                                                alt={callout.imageAlt}
                                                src={callout.imageSrc}
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">
                                            <a href={callout.href}>
                                                <span className="absolute inset-0" />
                                                {callout.name}
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Approach --> */}
            <div class="bg-neutral-900 rounded-[20px]">
                {/* <!-- Approach --> */}
                <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
                    {/* <!-- Title --> */}
                    <div class="max-w-3xl mb-10 lg:mb-14">
                        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Our Approach to Culinary Excellence</h2>
                        <p class="mt-1 text-neutral-400">
                            We take pride in crafting an unforgettable dining experience through meticulous ingredient selection, 
                            personalized service, and innovative dish creation. 
                            Here's how we ensure the best for our customers.
                        </p>
                    </div>
                    {/* <!-- End Title --> */}

                    {/* <!-- Grid --> */}
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                        <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
                            <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
                        </div>
                        {/* <!-- End Col --> */}

                        {/* <!-- Timeline --> */}
                        <div>
                            {/* <!-- Heading --> */}
                            <div class="mb-4">
                                <h3 class="text-yellow-600 text-xs font-medium uppercase">
                                    Steps
                                </h3>
                            </div>
                            {/* <!-- End Heading --> */}

                            {/* <!-- Item --> */}
                            <div class="flex gap-x-5 ms-1">
                                {/* <!-- Icon --> */}
                                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                    <div class="relative z-10 w-8 h-8 leading-8 flex justify-center items-center">
                                        <span class="flex shrink-0 justify-center items-center w-8 h-8 leading-8 border border-neutral-800 text-yellow-600 font-semibold text-xs uppercase rounded-full">
                                            1
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- End Icon --> */}

                                {/* <!-- Right Content --> */}
                                <div class="grow pt-0.5 pb-8 sm:pb-12">
                                    <p class="text-sm lg:text-base text-neutral-400">
                                        <span class="text-white">Ingredient Sourcing: </span>
                                        We carefully select the freshest and highest quality ingredients to create dishes full of flavor and nutrition.
                                    </p>
                                </div>
                                {/* <!-- End Right Content --> */}
                            </div>
                            {/* <!-- End Item --> */}

                            {/* <!-- Item --> */}
                            <div class="flex gap-x-5 ms-1">
                                {/* <!-- Icon --> */}
                                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                    <div class="relative z-10 w-8 h-8 leading-8 flex justify-center items-center">
                                        <span class="flex shrink-0 justify-center items-center w-8 h-8 leading-8 border border-neutral-800 text-yellow-600 font-semibold text-xs uppercase rounded-full">
                                            2
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- End Icon --> */}

                                {/* <!-- Right Content --> */}
                                <div class="grow pt-0.5 pb-8 sm:pb-12">
                                    <p class="text-sm lg:text-base text-neutral-400">
                                        <span class="text-white">Dish Preparation and Innovation: </span>
                                        Our chefs blend traditional techniques with modern innovations to craft meals that are both familiar and exciting.
                                    </p>
                                </div>
                                {/* <!-- End Right Content --> */}
                            </div>
                            {/* <!-- End Item --> */}

                            {/* <!-- Item --> */}
                            <div class="flex gap-x-5 ms-1">
                                {/* <!-- Icon --> */}
                                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                    <div class="relative z-10 w-8 h-8 leading-8 flex justify-center items-center">
                                        <span class="flex shrink-0 text-center flex-1 justify-center items-center w-8 h-8 leading-8 border border-neutral-800 text-yellow-600 font-semibold text-xs uppercase rounded-full">
                                            3
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- End Icon --> */}

                                {/* <!-- Right Content --> */}
                                <div class="grow pt-0.5 pb-8 sm:pb-12">
                                    <p class="text-sm md:text-base text-neutral-400">
                                        <span class="text-white">Personalized Dining Experience: </span>
                                        We tailor each dining experience to our customers' preferences, ensuring satisfaction with every visit.
                                    </p>
                                </div>
                                {/* <!-- End Right Content --> */}
                            </div>
                            {/* <!-- End Item --> */}

                            {/* <!-- Item --> */}
                            <div class="flex gap-x-5 ms-1">
                                {/* <!-- Icon --> */}
                                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                    <div class="relative z-10 w-8 h-8 leading-8 flex justify-center items-center">
                                        <span class="flex shrink-0 justify-center items-center w-8 h-8 leading-8 border border-neutral-800 text-yellow-600 font-semibold text-xs uppercase rounded-full">
                                            4
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- End Icon --> */}

                                {/* <!-- Right Content --> */}
                                <div class="grow pt-0.5 pb-8 sm:pb-12">
                                    <p class="text-sm md:text-base text-neutral-400">
                                        <span class="text-white">Customer Feedback and Improvement: </span>
                                        We value customer feedback and continuously refine our offerings to meet evolving tastes and expectations.
                                    </p>
                                </div>
                                {/* <!-- End Right Content --> */}
                            </div>
                            {/* <!-- End Item --> */}

                            <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-yellow-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="/contact">
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                                Schedule a call
                            </a>
                        </div>
                        {/* <!-- End Timeline --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>
                <div className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            {/* <!-- End Approach --> */}

            <NewsLetter />
            <Footer />
            {cartShow && <CartContainer />}
        </Helmet>
    );
};