import React from 'react'
import Cartridge1 from "./1.png"
import Cartridge2 from "./2.png"
import Cartridge3 from "./3.png"
import Cartridge4 from "./4.png"
import Cartridge5 from "./5.jpg"


export const Images = [
    Cartridge1,
    Cartridge2,
    Cartridge3,
    Cartridge4,
    Cartridge5
]
export const HtmlContent =() => (
    <div>
        <h3 class="modal-product-h3">CVC1113</h3>
        <h4 class="modal-product-h4" style={ {'text-decoration': 'underline'} }>High Corrosion-resistant Glass Tank</h4>
        <ul>
            <li>Screw-on Ceramic/Wood/Metal Mouthpiece</li>
            <li>Perfect For Thick Oil</li>
            <li>Guaranteed Microfeel™ Ceramic Atomizer</li>
            <li>Available in 0.5ml, 1ml Capacities</li>
            <li>Intake Holes: 4*2.0mm</li>
            <li>Resistance: 1.5Ω</li>
            <li>Dimensions: Φ10.5*50.2mm/Φ10.5*60.5mm</li>
        </ul>
    </div>
)

export const CoverImage = Cartridge1

export const Title = 'CVC1113'