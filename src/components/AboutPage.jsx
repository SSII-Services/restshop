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
            <NewsLetter />
            <Footer />
            {cartShow && <CartContainer />}
        </Helmet>
    );
};