/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HiCalendar } from 'react-icons/hi'
import { BiBus, BiDollarCircle, BiSupport } from 'react-icons/bi'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaTelegramPlane, FaXRay, FaDiscord } from 'react-icons/fa'

export const Footer = () => {
    return (
        <>
            {/* <div className="relative py-16 mt-16 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
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
                                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-20 text-lg leading-8 text-gray-300">
                            Suivez nous sur : 
                        </p>
                        <div className="flex max-w-md mt-6 gap-x-4">
                            <div className="p-2 rounded-md cursor-pointer bg-white/5 ring-1 ring-white/10 hover:bg-blue-800 hover:border-none">
                                <FaFacebookF className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="p-2 rounded-md cursor-pointer bg-white/5 ring-1 ring-white/10 hover:bg-blue-500 hover:border-none">
                                <FaTwitter className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="p-2 rounded-md cursor-pointer bg-white/5 ring-1 ring-white/10 hover:bg-rose-600 hover:border-none">
                                <FaInstagram className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="p-2 rounded-md cursor-pointer bg-white/5 ring-1 ring-white/10 hover:bg-slate-900 hover:border-none">
                                <FaGithub className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="p-2 rounded-md cursor-pointer bg-white/5 ring-1 ring-white/10 hover:bg-red-800 hover:border-none">
                                <FaYoutube className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                                <HiCalendar className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Respect des delais</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Recevez vos commandes à la date précisée.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                                <BiSupport className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Support Client</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Nous sommes là pour répondre à vos besoins.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                                <BiBus className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Livraison</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Recevez vos colis directement chez vous avec notre service de livraison à domicile.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                                <BiDollarCircle className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Remboursement inclus</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Nous sommes là pour vous satisfaire au cas contraire vous êtes remboursés.
                            </dd>
                        </div>
                    </dl>
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
        </div> */}

            <div className="flex items-center justify-center gap-10 py-16 lg:px-16 sm:justify-between max-sm:flex-col" >
                <p className="text-black text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved Wilson635.
                </p>

                <ul className="flex flex-wrap gap-5">
                    <a
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-red-400 rounded-full hover:bg-red-600"
                    >
                        <FaFacebookF className="w-6 h-6 text-white" aria-hidden="true" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-red-400 rounded-full hover:bg-red-600"
                    >
                        <FaGithub className="w-6 h-6 text-white" aria-hidden="true" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-red-400 rounded-full hover:bg-red-600"
                    >
                        <FaTelegramPlane className="w-6 h-6 text-white" aria-hidden="true" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-red-400 rounded-full hover:bg-red-600"
                    >
                        <FaDiscord className="w-6 h-6 text-white" aria-hidden="true" />
                    </a>
                </ul>
            </div>
        </>
    )
}
