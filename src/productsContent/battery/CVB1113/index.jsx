import React from 'react'
import Battery1 from "./1.png"
import Battery2 from "./2.png"
import Battery3 from "./3.png"
import Battery4 from "./4.png"
import Battery5 from "./5.png"
import Battery6 from "./6.png"
import Battery7 from "./7.png"
import Battery8 from "./8.png"
import Battery9 from "./9.png"
import Battery10 from "./10.png"

export const Images = [
    Battery1,
    Battery2,
    Battery3,
    Battery4,
    Battery5,
    Battery6,
    Battery7,
    Battery8,
    Battery9,
    Battery10
]
export const HtmlContent =() => (
    <div>
        <h3 class="modal-product-h3">CVB1113</h3>
        <h4 class="modal-product-h4" style={ {'text-decoration': 'underline'} }>Aluminum Alloy 300mAh Battery</h4>
        <ul>
            <li>10s Timer Control Prevents Over-vaping</li>
            <li>Bottom Indicator Light</li>
            <li>Dimensions: Φ11*80mm</li>
            <li>Output Voltage: 3.5V</li>
            <li>Rechargeable Battery with USB adapter</li>
        </ul>
    </div>
)

export const CoverImage = Battery1

export const Title = 'CVB1113'