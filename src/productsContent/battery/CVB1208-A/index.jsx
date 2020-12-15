import React from 'react'
import Battery1 from "./1.jpg"
import Battery2 from "./2.jpg"
import Battery3 from "./3.jpg"
import Battery4 from "./4.png"
import Battery5 from "./5.jpg"
import Battery6 from "./6.jpg"

export const Images = [
    Battery1,
    Battery2,
    Battery3,
    Battery4,
    Battery5,
    Battery6
]
export const HtmlContent =() => (
    <div>
        <h3 class="modal-product-h3">CVB1208-A</h3>
        <h4 class="modal-product-h4" style={ {'text-decoration': 'underline'} }>3-Grade Setting 320mAh Battery</h4>
        <ul>
            <li>Child Resistant Lock</li>
            <li>10s Timer Control Prevents Over-vaping</li>
            <li>3 Heat Settings for Oil of Different Viscosity</li>
            <li>Dimensions: Φ12.5*82.74mm</li>
            <li>Variable Voltage: 2.8V-3.3V-3.8V</li>
            <li>Rechargeable battery with USB adapter</li>
        </ul>
    </div>
)

export const CoverImage = Battery1

export const Title = 'CVB1208-A'