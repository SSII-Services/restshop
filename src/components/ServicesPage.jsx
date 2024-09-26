/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import { Helmet } from "./helmet/Helmet";
import { NewsLetter } from './UI/NewsLetter';
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";
import HeroServices from './UI/HeroServices';


export const ServicesPage = () => {

    const [{ foodItems, cartShow }, dispatch] = useStateValue();


    return (
        <Helmet title="Services">
            <HeroServices />

            {/* <!-- Features --> */}
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <!-- Title --> */}
                <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
                        Explore tools
                    </h2>
                    <p class="mt-3 text-gray-800 dark:text-neutral-200">
                        The powerful and flexible theme for all kinds of businesses.
                    </p>
                </div>
                {/* <!-- End Title --> */}

                {/* <!-- Grid --> */}
                <div class="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
                    {/* <!-- Icon Block --> */}
                    <div class="col-span-6 sm:col-span-4 text-center">
                        <svg class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                        <div class="mt-2 sm:mt-6">
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                Responsive
                            </h3>
                        </div>
                    </div>
                    {/* <!-- End Icon Block --> */}

                    {/* <!-- Icon Block --> */}
                    <div class="col-span-6 sm:col-span-4 text-center">
                        <svg class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
                        <div class="mt-2 sm:mt-6">
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                Customizable
                            </h3>
                        </div>
                    </div>
                    {/* <!-- End Icon Block --> */}

                    {/* <!-- Icon Block --> */}
                    <div class="col-span-6 col-start-4 sm:col-span-4 text-center">
                        <svg class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                        <div class="mt-2 sm:mt-6">
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                24/7 Support
                            </h3>
                        </div>
                    </div>
                    {/* <!-- End Icon Block --> */}
                </div>
                {/* <!-- End Grid --> */}

                {/* <!-- Grid --> */}
                <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
                    <div class="hidden md:block col-span-4 md:col-span-3">
                        <img class="rounded-xl" src="https://img.freepik.com/free-photo/reserved-dining-table_53876-94937.jpg?t=st=1726221071~exp=1726224671~hmac=3c84f66f92047cb9ffc2f88ab64937a3918c14c7ea8ad621874c499acc5eedbf&w=900" alt="Features Image" />
                    </div>
                    {/* <!-- End Col --> */}

                    <div class="col-span-4 md:col-span-3">
                        <img class="rounded-xl" src="https://img.freepik.com/free-psd/delivery-character-with-scooter-with-face-mask-3d-illustration_1419-3018.jpg?t=st=1726221477~exp=1726225077~hmac=b56e8d55ef1aec5966fccf51b9bcb0c0f13a2f7e9b421f25d74a0d90b9616f32&w=740" alt="Features Image" />
                    </div>
                    {/* <!-- End Col --> */}

                    <div class="col-span-4 md:col-span-3">
                        <img class="rounded-xl" src="https://img.freepik.com/free-vector/preparing-feast-isometric-illustration_1284-21168.jpg?t=st=1726221727~exp=1726225327~hmac=d701f89f1180659de5fda2d1b0231cdbb78313468df79647b5aaf7836f811e95&w=740" alt="Features Image" />
                    </div>
                    {/* <!-- End Col --> */}

                    <div class="col-span-4 md:col-span-3">
                        <img class="rounded-xl" src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image" />
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
            {/* <!-- End Features --> */}
            <NewsLetter />
            {cartShow && <CartContainer />}
        </Helmet>
    );
};