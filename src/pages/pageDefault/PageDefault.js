import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    margin-left: 15px;
    margin-right: 15px;
`;

const PageDefault = ({children}) =>{
    return(
        <>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;