import React from 'react'
import Disposable1 from "./1.jpg"
import Disposable2 from "./2.jpg"

export const Images = [
    Disposable1,
    Disposable2
]
export const HtmlContent =() => (
    <div>
        <h3>CVD90280</h3>
        <h4 style={ {'text-decoration': 'underline'} }>Rechargeable Disposable</h4>
        <ul>
            <li>Proprietary Ceramic Heating Coil</li>
            <li>Capacity: 0.5 or 1ml</li>
            <li>Battery Capacity: 320mAh </li>
            <li>Dimensions: 10.5mm*127mm</li>
            <li>Intake Holes: 4*2.0mm</li>
            <li>Resistance: 1.2Ω</li>
            <li>Voltage: 3.7V</li>
            <li>Press & Lock Mouthpiece</li>
        </ul>
    </div>
)

export const CoverImage = Disposable1

export const Title = 'CVD90280'