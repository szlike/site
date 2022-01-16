import React from "react";
import BannerCss from "./banner.scss";
import BannerImage1 from "../../assets/banner/pen-with-cann.jpg"
import BannerImage2 from "../../assets/banner/pen-with-apple.jpg"
import BannerImage3 from "../../assets/banner/man-smoking.jpg"
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const banner = () => (
		<AutoplaySlider 
			className='banner-carousell' 
			cssModule={[BannerCss] }
			AnimationStyles="foldOutAnimation"
			play={true}
			cancelOnInteraction={true} // should stop playing on user interaction
			interval={6000}
		>
			<div class="carousell-img" data-src={BannerImage1} />
			<div class="carousell-img" data-src={BannerImage2} />
			<div class="carousell-img" data-src={BannerImage3} />
			<div>
			<iframe width="1000" height="460"src="https://www.youtube.com/embed/BNQFr2FcJ3k"></iframe>
			</div>
		</AutoplaySlider>
)

export default banner