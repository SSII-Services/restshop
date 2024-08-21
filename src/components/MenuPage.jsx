import * as React from 'react';
import {Helmet} from "./helmet/Helmet";
// import { NewsLetter } from './UI/NewsLetter';
import { MenuItems } from './UI/MenuItems';
import { Footer } from './UI/Footer';
import HeroMenu from './UI/HeroMenu';


export const MenuPage = () => {
    return (
        <Helmet title="Menu">
            <HeroMenu />
            <MenuItems />
            {/* <NewsLetter /> */}
            <Footer />
        </Helmet>
    );
};