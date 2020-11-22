import React from "react";
import BannerCss from "./banner.scss";
import BannerImage1 from "../../assets/banner/pen-with-cann.jpg"
import BannerImage2 from "../../assets/banner/pen-with-apple.jpg"
import BannerImage3 from "../../assets/banner/man-smoking.jpg"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import { 
	Provider,
	Link,
	withNavigationContext,
	withNavigationHandlers
  } from "react-awesome-slider/dist/navigation";

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

const AutoplaySlider = withAutoplay(AwesomeSlider);

// Create an AwesomeSlider instance with some content
const Slider = () => {
	return (
	  <NavigationSlider
		className="awesome-slider banner-carousell"
		media={[
		  {
			slug: "page-one",
			className: "page-one",
			children: () => <p>Page One</p>
		  },
		  {
			slug: "page-two",
			className: "page-two",
			children: () => <p>Page Two</p>
		  }
		]}
	  />
	 )
}

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
		</AutoplaySlider>
)

export default Slider