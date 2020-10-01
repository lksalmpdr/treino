import React, { useState } from 'react';
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
        const user = values.user;
        const password = md5(values.password)
        if(!user || !password){
            handleError('Preencha todos os campos');
            setErrorCount({'errorCount' : errorCount.errorCount + 1})
        }else{
            setErrorCount({'errorCount' : 0});
            try{
                const response = await api.post("/sessions", {user, password} );
                login(response.data.token);
                this.props.history.push("/app")
            }catch(err){
                alert('Erro ao autenticar');
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
                <Button type="submit">Entrar</Button>
            </form>
                <Button onClick={clearForm}>Limpar</Button>
        </PageDefault>
    );
}

export default SignUp;