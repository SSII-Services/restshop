import React from 'react'
import Logo from "../../img/logo.png";
// import { HiCalendar } from 'react-icons/hi'
// import { BiBus, BiDollarCircle, BiSupport } from 'react-icons/bi'
// import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa'

export const NewsLetter = () => {
    return (
        <>
            <div className="relative py-16 overflow-hidden bg-red-900 rounded-2xl mt-9 isolate">
                <div className="px-6 mx-auto max-w-7xl">
                    <div className="grid justify-between max-w-2xl grid-cols-1 mx-auto lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Rejoignez notre newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Rejoignez notre newsletter recevez des articles et podcasts sur les entreprises et leurs services.
                            </p>

                            <div className="flex max-w-md mt-6 gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className='items-end justify-end hidden max-w-xl lg:flex lg:max-w-lg'>
                            <img src={Logo} className="object-cover w-40" alt="logo" />
                        </div>
                    </div>
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
        </>
    )
}
