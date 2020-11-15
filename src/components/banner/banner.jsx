import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./banner.scss";
import BannerImage from "../../assets/banner/banner-2.jpg"

const banner = () => (
    <div>
        <img src={BannerImage} />
    </div>
)
export default banner