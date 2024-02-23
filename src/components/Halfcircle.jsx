import React, { useState, useEffect } from 'react';
import { blue, yellow, skyBlue, green } from './data';



const Halfcircle = ({ theme, title, score }) =>
{
    const [colors, setColors] = useState([]);

    useEffect(() =>
    {
        if (theme === "blue") {
            setColors(blue)
        }
        if (theme === "yellow") {
            setColors(yellow)
        }
        if (theme === "skyBlue") {
            setColors(skyBlue)
        }
        if (theme === "green") {
            setColors(green)
        }
    }, [theme])

    return (
        <div className='circle'>

            <div className='title'>{title}</div>
            <div class="arc">
                {
                    colors.length > 0 && colors.map((color) =>
                    {
                        return (
                            <div class="dot" style={{ backgroundColor: color }}></div>
                        )
                    })
                }


            </div>
            <div className='score'>{score}</div>
        </div>
    )
}

export default Halfcircle
