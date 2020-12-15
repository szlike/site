import {
    Images as CVB1004Images, 
    HtmlContent as CVB1004HtmlContent , 
    CoverImage as CVB1004CoverImage,
    Title as CVB1004Title
} from './CVB1004/index'

import {
    Images as CVB1113Images, 
    HtmlContent as CVB1113HtmlContent , 
    CoverImage as CVB1113CoverImage,
    Title as CVB1113Title
} from './CVB1113/index'

import {
    Images as CVB1208AImages, 
    HtmlContent as CVB1208AHtmlContent , 
    CoverImage as CVB1208ACoverImage,
    Title as CVB1208ATitle
} from './CVB1208-A/index'

import {
    Images as CVB3401Images, 
    HtmlContent as CVB3401HtmlContent , 
    CoverImage as CVB3401CoverImage,
    Title as CVB3401Title
} from './CVB3401/index'


export const BatteryProducts = [
    {
        id: "battery-1",
        preview: CVB1004CoverImage,
        title: CVB1004Title,
        tag: "battery",
        productPageData: {
            images: CVB1004Images,
            htmlContent: CVB1004HtmlContent
        }
    },
    {
        id: "battery-2",
        preview: CVB1113CoverImage,
        title: CVB1113Title,
        tag: "battery",
        productPageData: {
            images: CVB1113Images,
            htmlContent: CVB1113HtmlContent
        }
    },
    {
        id: "battery-3",
        preview: CVB1208ACoverImage,
        title: CVB1208ATitle,
        tag: "battery",
        productPageData: {
            images: CVB1208AImages,
            htmlContent: CVB1208AHtmlContent
        }
    },
    {
        id: "battery-4",
        preview: CVB3401CoverImage,
        title: CVB3401Title,
        tag: "battery",
        productPageData: {
            images: CVB3401Images,
            htmlContent: CVB3401HtmlContent
        }
    }
]