/* eslint-disable no-unused-vars */

import * as React from 'react';
import {Helmet} from "./helmet/Helmet";
import { NewsLetter } from './UI/NewsLetter';
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";


export const ServicesPage = () => {

    const [{ foodItems, cartShow }, dispatch] = useStateValue();


    return (
        <Helmet title="Services">
            <div>
                ServicesPage
            </div>
            <NewsLetter />
            {cartShow && <CartContainer />}
        </Helmet>
    );
};