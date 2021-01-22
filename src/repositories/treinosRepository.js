import config from '../config/urlConfig';

const URL_TREINOS = `${config.URL_BACKEND}/treinos`;

const getTreinoByToken =(token)=>
{
    return fetch(`${URL_TREINOS}?token=${token}`)
        .then(res=>{
            if(res.ok)
            {
                return res.json();
            }
            throw new Error('Não foi possível recuperar os dados. ', res.responseText);
        })
}

const getTreinoById = (idTreino)=>
{
    return fetch(`${URL_TREINOS}/treinos/id=${idTreino}`)
    .then(res=>{
        if(res.ok)
        {
            return res.json();
        }
        throw new Error('Não foi possível recuperar os dados. ', res.responseText);
    })
}

export default { getTreinoByToken, getTreinoById }