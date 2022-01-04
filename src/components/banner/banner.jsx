import React from "react";
import "./banner.scss";
import BannerImage1 from "../../assets/banner/slider-1.png"
import BannerImage2 from "../../assets/banner/slider-2.png"
import BannerImage3 from "../../assets/banner/slider-3.png"
import BannerImage4 from "../../assets/banner/slider-4.png"
import BannerImage1Mobile from "../../assets/banner/slider-1-mobile.png"
import BannerImage2Mobile from "../../assets/banner/slider-2-mobile.png"
import BannerImage3Mobile from "../../assets/banner/slider-3-mobile.png"
import BannerImage4Mobile from "../../assets/banner/slider-4-mobile.png"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const onChange = ()=>{

}

const onClickItem = ()=>{

}

const onClickThumb = ()=>{

}

const getConfigurableProps = () =>({
	showArrows: true,
    // showStatus: boolean('showStatus', true, tooglesGroupId),
    // showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: true,
    // showThumbs: boolean('showThumbs', true, tooglesGroupId),
    // useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: true,
    stopOnHover: true,
    // swipeable: boolean('swipeable', true, tooglesGroupId),
    // dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    // emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    // thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    // selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: 5000,
    transitionTime: 600 //,
    // swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
})

const banner = (props) => (
	<Carousel className={`carousel-component ${!props.userIsScrolled ? "extraLargePaddingTop" : ""}`}
	{...getConfigurableProps()} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
		<div>
			<img src={props.isMobileMode ? BannerImage1Mobile : BannerImage1} />
			{/* <div className="legend first">
				<span>Manufactured in ISO and GMP Compliant Facilitie</span>
				<p>Meticulous end-to-end supply chain management from production, shipping, customs, to delivery. Headquartered in Canada</p>
			</div> */}
		</div>
		<div>
			<img src={props.isMobileMode ? BannerImage2Mobile : BannerImage2} />
			{/* <div className="legend first">
				<span>TECHNICAL SUPPORT</span>
				<p>Ensuring your success with professional engineering and design support. Dedicated to enhancing your product offering through hardware customizations, branding, and more.</p>
			</div> */}
		</div>
		<div>
			<img src={props.isMobileMode ? BannerImage3Mobile : BannerImage3} />
			{/* <div className="legend third">
				<span>CUSTOMER CARE</span>
				<p>Live phone and email service and support available Monday–Friday, 8:30 am–5:30 pm EST. Here to help our clients at every step of the wholesale buying process.</p>
			</div> */}
		</div>
		<div>
			<img src={props.isMobileMode ? BannerImage4Mobile : BannerImage4} />
			{/* <div className="legend third">
				<span>CUSTOMER CARE</span>
				<p>Live phone and email service and support available Monday–Friday, 8:30 am–5:30 pm EST. Here to help our clients at every step of the wholesale buying process.</p>
			</div> */}
		</div>
	</Carousel>
	// <AutoplaySlider 
	// 	className='banner-carousell' 
	// 	cssModule={[BannerCss] }
	// 	AnimationStyles="foldOutAnimation"
	// 	play={true}
	// 	cancelOnInteraction={true} // should stop playing on user interaction
	// 	interval={6000}
	// >
	// 	<div class="carousell-img" data-src={BannerImage1} />
	// 	<div class="carousell-img" data-src={BannerImage2} />
	// 	<div class="carousell-img" data-src={BannerImage3} />
	// </AutoplaySlider>
)

export default banner