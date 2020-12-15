import {
    Images as CVD2204Images, 
    HtmlContent as CVD2204HtmlContent , 
    CoverImage as CVD2204CoverImage,
    Title as CVD2204Title
} from './CVD2204/index'

import {
    Images as CVD1915Images, 
    HtmlContent as CVD1915HtmlContent , 
    CoverImage as CVD1915CoverImage,
    Title as CVD1915Title
} from './CVD1915/index'


export const PodDisposableProducts = [
    {
        id: "pod-disposable-1",
        preview: CVD2204CoverImage,
        title: CVD2204Title,
        tag: "pod-disposable",
        productPageData: {
            images: CVD2204Images,
            htmlContent: CVD2204HtmlContent
        }
    },
    {
        id: "pod-disposable-2",
        preview: CVD1915CoverImage,
        title: CVD1915Title,
        tag: "pod-disposable",
        productPageData: {
            images: CVD1915Images,
            htmlContent: CVD1915HtmlContent
        }
    }
]