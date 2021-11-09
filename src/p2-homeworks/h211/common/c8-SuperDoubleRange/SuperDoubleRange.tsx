import React, {ChangeEvent} from 'react'
import Slider from "@mui/material/Slider";

type SuperDoubleRangePropsType = {
    onChangeRange: (newValue: number | number[]) => void
    value: number[]
    min?: number
    max?: number
    step?: number
    disable?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max,
        step, disable,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    const handleChangeSlider = (e:Event, newValue: number | number[]) => {
        onChangeRange(newValue)
    }
    // сделать самому, можно подключать библиотеки



    return (
        <>
            <Slider
                style={{maxWidth:500}}
                value={value}
                onChange={handleChangeSlider}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                {...restProps}/>

        </>
    )
}

export default SuperDoubleRange
