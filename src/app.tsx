import React from "react";

// components
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Consult from './components/consult';

export default function () {
    return <React.Fragment>
        <Header />
        <Banner />
        <Consult />
        <Footer />
    </React.Fragment>;
};
