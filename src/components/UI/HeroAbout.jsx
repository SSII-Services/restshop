/* eslint-disable jsx-a11y/anchor-is-valid */

import p1 from '../../img/produk/produk_1.jpeg'
import p2 from '../../img/produk/produk_2.jpg'
import p3 from '../../img/produk/produk_3.jpg'
import p4 from '../../img/produk/produk_4.jpg'
import p5 from '../../img/produk/produk_5.jpg'
import p6 from '../../img/produk/produk_6.jpg'
import p7 from '../../img/produk/produk_7.jpg'
export default function HeroAbout() {
    return (
        <div className="relative overflow-hidden bg-[#f3f3f3] w-full">
            <div className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative w-full mx-auto sm:static">
                    <div className="sm:max-w-xl">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Summer styles are finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                            if you live or die.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="w-full pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt=""
                                                    src={p1}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={p2}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={p3}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={p4}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={p5}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={p6}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                            <div className="w-[220px] h-64 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={p7}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block px-8 py-3 font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                            >
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
