import React from 'react';
import { useRecoilValue,useRecoilState } from 'recoil';
import {TabState} from "../atom/atom"
import {HtmlState} from "../atom/atom"
import {CssState} from "../atom/atom"
import {JsState} from "../atom/atom"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "./Editor.css"


const Editor: React.FC = () => {
    const number =useRecoilValue(TabState)
    const [html,setHtml]=useRecoilState(HtmlState)
    const [css,setCss]=useRecoilState(CssState)
    const [js,setJs]=useRecoilState(JsState)

    const type=[
        {
            type:"html",
            source:html,
            change:setHtml
        },
        {
            type:"css",
            source:css,
            change:setCss
        },
        {
            type:"javascript",
            source:js,
            change:setJs
        }
    ]
    
    return (
        <div className="editor">
            <AceEditor
                mode={type[number].type}
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                showPrintMargin={false}
                value={type[number].source}
                onChange={value=>{type[number].change(value)}}
                fontSize={17}
            />
        </div>
    )
}

export default Editor
