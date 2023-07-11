import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const AppToServe = () => {
    const title ="BASIC REACT"
    return (
        <div>
            <Header text = {title}></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
};

export default AppToServe;