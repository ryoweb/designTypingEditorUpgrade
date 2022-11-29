import {atom} from 'recoil';

export const TabState=atom({
    key:"tabstate",
    default:0  
})

export const HtmlState=atom({
    key:"htmlstate",
    default:"<div>Hello</div>"
})

export const CssState=atom({
    key:"cssstate",
    default:""
})

export const JsState=atom({
    key:"jsstate",
    default:""
})