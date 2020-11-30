import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../pageDefault/PageDefault';
import FormField from '../../components/FormField/formfield';
import Button from '../../components/Button/button';
import api from '../../services/authApi';
import md5 from 'md5';

import useForm from '../../hooks/useForm';
import { login } from '../../services/auth';


const AvisoErro = ({mensagem}) =>{
    return(
        <div style={{border:"solid", borderColor:"red", textAlign:"center"}}>
            <p>{mensagem}</p>
        </div>
    )
}

const SignUp = () =>{
    let history = useHistory();

    const initValues = {
        user : '',
        password : '',
        err : 'Preencha todos os campos',
    }

    const errorInitial = {
        errorCount : 0,
    }
    const { handleChange, values, clearForm, handleError } = useForm(initValues);

    let [errorCount, setErrorCount] = useState(errorInitial);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = values.user;
        const password = md5(values.password)
        if(!email || !password){
            handleError('Preciso saber quem é vc... me responda tudo ');
            setErrorCount({'errorCount' : errorCount.errorCount + 1})
        }else{
            setErrorCount({'errorCount' : 0});
            try{
                const response = await api.get(`/users?email=${email}&password=${password}` );
                if(!response.data){
                    handleError('Não reconheci você... Talvez sejamos de galáxias diferentes');
                    setErrorCount({'errorCount' : errorCount.errorCount + 1})
                }else{
                    login(response.data[0].token);
                    history.push("/app")
                }
            }catch(err){
                handleError('Não reconheci você... Talvez sejamos de galáxias diferentes');
                setErrorCount({'errorCount' : errorCount.errorCount + 1})
            }
        }
      };
    
    return(
        <PageDefault>
            <h2>SignUp</h2>
            { errorCount.errorCount > 0 ? <AvisoErro mensagem={values.err} /> : null }
            <form onSubmit={ handleSignUp }>
                <FormField
                    label="Usuário"
                    name="user"
                    value={values.user}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Senha"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <div className="form-group pull-right">
                    <Button type="submit">Entrar</Button>
                    <Button onClick={clearForm}>Limpar</Button>
                </div>
            </form>
        </PageDefault>
    );
}

export default SignUp;