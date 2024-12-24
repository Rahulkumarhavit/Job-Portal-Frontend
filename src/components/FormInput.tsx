import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

const FormInput = ({ label, type, value, onChange, name, placeholder, defaultValue}:{label:string,type:string,value:string,name:string,placeholder:string,defaultValue:string}) => {
    return (
        <div className='my-1'>
            <Label htmlFor={name}>{label}</Label>
            <Input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1 bg-white'
            />
        </div>
    )
}

export default FormInput