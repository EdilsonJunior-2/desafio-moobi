import React from 'react';
import Secao1 from './secao1';
import Secao2 from './secao2';
import Secao3 from './secao3';
import Secao4 from './secao4';
import Secao5 from './secao5';
import './styles.css';

// import { Container } from './styles';

function Home() {
    return (
        <div className="home">
            <Secao1 />
            <Secao2 />
            <Secao3 />
            <Secao4 />
            <Secao5 />
        </div>
    );
}

export default Home;