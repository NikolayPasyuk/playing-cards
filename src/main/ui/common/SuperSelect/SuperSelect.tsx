import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, i) =>
        <option key={i}>{el}</option>) : []
    // map options with key


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            return onChange(e)
        }

        if (onChangeOption) {
            return onChangeOption(e.currentTarget.value)
        }
    }

    return (
        <div>
            <select className={s.select_css} onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>
    )

}
