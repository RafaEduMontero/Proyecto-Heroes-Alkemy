import {Fragment} from 'react'

const InputFormLogin = ({placeholder,icon,type}) => {
    return (
        <Fragment>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">{icon}</div>
                </div>
                <input type={type} className="form-control" placeholder={placeholder}></input>
            </div>
        </Fragment>
    )
}

export default InputFormLogin
