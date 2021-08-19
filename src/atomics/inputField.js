import React from 'react'

const InputField = ({onKeyUp,placeholder,onChange,name}) => {
    return (
        <input type="text" className="form-control" name={name} onKeyUp={onKeyUp} placeholder={placeholder} onChange={onChange}/>
    )
}

export default InputField
