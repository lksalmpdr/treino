import React, { useEffect, useState } from 'react';
import { getToken } from '../../services/auth';
import { getTreinoByToken } from '../../repositories/treinosRepository';

const Home = () =>{
    let [token, setToken] = useState([]);
    
    useEffect(()=>{
        setToken(getToken);
        getTreinoByToken(token);
    }, [token]);
    return(
        <div>
            <h2>Bem-vindo, </h2>

            <div className="card">
                <h3>Seus Treinos</h3>
                <p>Dia</p>
                <p>Tipo</p>
                <p>Foco</p>
            </div>  
        </div>

    )
}

export default Home;