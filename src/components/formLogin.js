import { Fragment} from 'react';
//ATomics
import IconSend from '../atomics/iconSend';
import IconUser from '../atomics/iconUser';
import InputFormLogin from '../atomics/inputFormLogin';
import IconPassword from '../atomics/iconPassword';
import ButtonCard from '../atomics/buttonCard';
//ReactHookForm
import { useForm } from 'react-hook-form';
//React Router
import { useHistory } from "react-router-dom";
//HelpersPaginate
import helperPaginate from '../helpers/helpersPaginate';

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const { login } = helperPaginate;
    const onSubmit = (datos) => {
        login(history, datos)
    }
    return (
        <Fragment>
            <form className="col-12 col-sm-6 col-md-4 bg-success text-center p-4">
                <InputFormLogin register={register} errors={errors} name="email" placeholder="Email" icon={<IconUser />} />
                {errors.email && <span className="text-danger">El email es Requerido</span>}
                <InputFormLogin type="password" register={register} errors={errors} name="password" placeholder="Password" icon={<IconPassword />} />
                {errors.password && <span className="text-danger">El password es Requerido</span>}
                <div className="mt-2"><ButtonCard label="Enviar" color="primary" icon={<IconSend />} onClick={handleSubmit(onSubmit)} /></div>
            </form>
        </Fragment>
    )
}

export default FormLogin;
