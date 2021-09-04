import {Fragment} from 'react'

const InputFormLogin = ({placeholder,icon,register,name,type}) => {
    console.log(name)
    return (
        <Fragment>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">{icon}</div>
                </div>
                <input type={type ? type : 'text'} {...register(name,{required: true})} className="form-control" placeholder={placeholder}></input>
            </div>
        </Fragment>
    )
}

export default InputFormLogin
