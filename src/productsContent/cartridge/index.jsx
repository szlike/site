import {
    Images as CVC1112Images, 
    HtmlContent as CVC1112HtmlContent , 
    CoverImage as CVD1112CoverImage,
    Title as CVC1112Title
} from './CVC1112/index'

import {
    Images as CVC1113Images, 
    HtmlContent as CVC1113HtmlContent , 
    CoverImage as CVC1113CoverImage,
    Title as CVC1113Title
} from './CVC1113/index'

import {
    Images as CVC1016CImages, 
    HtmlContent as CVC1016CHtmlContent , 
    CoverImage as CVC1016CCoverImage,
    Title as CVC1016CTitle
} from './CVC1016-C/index'


export const CartridgeProducts = [
    {
        id: "cartridge-1",
        preview: CVD1112CoverImage,
        title: CVC1112Title,
        tag: "cartridge",
        productPageData: {
            images: CVC1112Images,
            htmlContent: CVC1112HtmlContent
        }
    },
    {
        id: "cartridge-2",
        preview: CVC1113CoverImage,
        title: CVC1113Title,
        tag: "cartridge",
        productPageData: {
            images: CVC1113Images,
            htmlContent: CVC1113HtmlContent
        }
    },
    {
        id: "cartridge-3",
        preview: CVC1016CCoverImage,
        title: CVC1016CTitle,
        tag: "cartridge",
        productPageData: {
            images: CVC1016CImages,
            htmlContent: CVC1016CHtmlContent
        }
    }
]