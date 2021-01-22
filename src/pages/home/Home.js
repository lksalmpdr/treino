import React, { useEffect, useState } from 'react';
import { getToken } from '../../services/auth';
import treinosRepository from '../../repositories/treinosRepository';

import Card from '../../components/TreinoCard/treinoCard';

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
                            <Card
                                key={treino.id}
                                idTreino={treino.id}
                                data={treino.data}
                                tipo={treino.tipo}
                                foco={treino.foco}
                                dayName={dayName}
                                cardExpress="treino"
                            />
                        );
                    })
                }
                </div>
                <div className="row">
                    <div className="form-group">
                        <button className="btn btn-default">Novo Treino</button>
                    </div>
                </div>
            </div>

    )
}

export default Home;