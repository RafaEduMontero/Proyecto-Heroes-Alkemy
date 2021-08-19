import { Fragment } from 'react';
import IconSend from '../atomics/iconSend';
import IconUser from '../atomics/iconUser';
import InputFormLogin from '../atomics/inputFormLogin';
import IconPassword from '../atomics/iconPassword';
import ButtonCard from '../atomics/buttonCard';
const FormLogin = () => {
    return (
        <Fragment>
            <form className="col-12 col-sm-6 col-md-4 bg-success text-center p-4">
                <InputFormLogin placeholder="Email" icon={<IconUser/>}/>
                <InputFormLogin placeholder="Password" icon={<IconPassword/>}/>
                <ButtonCard label="Enviar" color="primary" icon={<IconSend/>}/>
            </form>
        </Fragment>
    )
}

export default FormLogin;
