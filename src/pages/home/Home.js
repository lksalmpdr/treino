import React, { useEffect, useState } from 'react';
import { getToken } from '../../services/auth';
import treinosRepository from '../../repositories/treinosRepository';
import md5 from 'md5';

const Home = () =>{
    let [token, setToken] = useState([]);
    let [treinos, setTreinos] = useState([]);
    
    useEffect(()=>{
        setToken(getToken);
        treinosRepository.getTreinoByToken(token)
            .then((retunedTrain)=>{
                setTreinos(retunedTrain[0].treinos);
            })
            .catch((err)=>{
                console.log(err.message);
              })
    }, [token]);
    return(
        <div>
            <h2>Bem-vindo, </h2>
            <div className="row">
                {
                    (treinos || []).map((treino)=>{
                        const days = ['Domingo', 'Segunda-Feira'
                        , 'Terça-Feira', 'Quarta-Feira'
                        , 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

                        let dayName = days[new Date(treino.data).getDay()];

                        return(
                            <div key={md5(`${treino.data}${treino.foco}`)} className="col-3">
                                <h4>Treino de {dayName}, {new Date(treino.data).toLocaleDateString('pt-br')}</h4>
                                <p>Tipo: {treino.tipo}</p>
                                <p>Foco: {treino.foco}</p>                                
                            </div>
                        );
                    })
                }
            </div>
        </div>

    )
}

export default Home;