/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaGithub, FaTelegramPlane, FaDiscord, FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-center gap-10 py-16 lg:px-16 lg:justify-between " >
                <p className="text-black text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved Wilson635.
                </p>

                <ul className="flex flex-wrap gap-5">
                    <a
                        href="https://www.linkedin.com/in/wilson-ngahemeni/"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-red-400 rounded-full hover:bg-red-600"
                    >
                        <FaLinkedinIn className="w-6 h-6 text-white" aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/Wilson635"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 transition-colors bg-red-400 rounded-full hover:bg-red-600"
                    >
                        <FaGithub className="w-6 h-6 text-white" aria-hidden="true" />
                    </a>
                    <a
                        href="https://t.me/SSIIServices"
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
