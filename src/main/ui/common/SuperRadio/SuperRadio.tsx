import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import r from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        if (onChange) {
            return onChange(e)
        }

        if (onChangeOption) {
            return onChangeOption(e.currentTarget.value)
        }
    }


    // map options with key
    const mappedOptions: any[] = options ? options.map((o, i) => (

        <label className={r.label_style} key={name + '-' + i}>
            <input
                className={r.input_style}
                type={'radio'}
                onChange={onChangeCallback}
                name={name}
                value={o}
                checked={o === value}
            />
            {o}
        </label>
    )) : []

    return (
        <span className={r.content_style}>
            {mappedOptions}
        </span>
    )
}

export default SuperRadio
