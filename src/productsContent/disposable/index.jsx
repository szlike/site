import {
    Images as CVD1102Images, 
    HtmlContent as CVD1102HtmlContent , 
    CoverImage as CVD1112CoverImage,
    Title as CVD1102Title
} from './CVD1102/index'

import {
    Images as CVD1004Images, 
    HtmlContent as CVD1004HtmlContent , 
    CoverImage as CVD1004CoverImage,
    Title as CVD1004Title
} from './CVD1004/index'

import {
    Images as CVD90391Images, 
    HtmlContent as CVD90391HtmlContent , 
    CoverImage as CVD90391CoverImage,
    Title as CVD90391Title
} from './CVD90391/index'

import {
    Images as CVD90280Images, 
    HtmlContent as CVD90280HtmlContent , 
    CoverImage as CVD90280CoverImage,
    Title as CVD90280Title
} from './CVD90280/index'


export const DisposableProducts = [
    {
        id: "disposable-1",
        preview: CVD1112CoverImage,
        title: CVD1102Title,
        tag: "disposable",
        productPageData: {
            images: CVD1102Images,
            htmlContent: CVD1102HtmlContent
        }
    },
    {
        id: "disposable-2",
        preview: CVD1004CoverImage,
        title: CVD1004Title,
        tag: "disposable",
        productPageData: {
            images: CVD1004Images,
            htmlContent: CVD1004HtmlContent
        }
    },
    {
        id: "disposable-3",
        preview: CVD90391CoverImage,
        title: CVD90391Title,
        tag: "disposable",
        productPageData: {
            images: CVD90391Images,
            htmlContent: CVD90391HtmlContent
        }
    },
    {
        id: "disposable-4",
        preview: CVD90280CoverImage,
        title: CVD90280Title,
        tag: "disposable",
        productPageData: {
            images: CVD90280Images,
            htmlContent: CVD90280HtmlContent
        }
    }
]