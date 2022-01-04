import React from 'react'
import Battery1 from "./1.png"
import Battery2 from "./2.png"
import Battery3 from "./3.png"
import Battery4 from "./4.png"


export const Images = [
    Battery1,
    Battery2,
    Battery3,
    Battery4
]
export const HtmlContent =() => (
    <div>
        <h3 class="modal-product-h3">CVB1004</h3>
        <h4 class="modal-product-h4" style={ {'text-decoration': 'underline'} }>3-Grade Setting 280mAh Battery</h4>
        <ul>
            <li>10s Timer Control Prevents Over-vaping</li>
            <li>3 Heat Settings for Oil of Different Viscosity</li>
            <li>Dimensions: Φ10*92.7mm</li>
            <li>Variable Voltage: 2.8V-3.3V-3.8V</li>
            <li>Material: Stainless Steel</li>
            <li>Rechargeable battery with USB adapter</li>
        </ul>
    </div>
)

export const CoverImage = Battery1

export const Title = 'CVB1004'