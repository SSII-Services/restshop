// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import HeroMenuBg from '../../img/HeromenuBg.jpg'

export default function HeroMenu() {
    return (
        <div className="relative py-24 overflow-hidden bg-[#F3f3f3] isolate sm:py-32 lg:overflow-visible">
            <div className="absolute inset-0 overflow-hidden -z-10">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 ">
                    <div>
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 font-bold tracking-tight text-gray-900 text-[2.5rem] lg:text-[4.5rem]">A Menu fast f<span className='text-red-500'>oo</span>d</h1>
                            <p>
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas.
                            </p>
                            <button
                                type="button"
                                className="w-full py-4 mt-5 text-white transition-all duration-100 ease-in-out rounded-lg px-28 bg-gradient-to-br from-red-400 to-red-500 md:w-auto hover:shadow-lg"
                            >
                                Book a table
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={HeroMenuBg}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
            </div>
        </div>
    )
}
