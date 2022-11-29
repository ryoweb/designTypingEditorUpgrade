import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { HtmlState } from "../atom/atom"
import { CssState } from "../atom/atom"
import { JsState } from "../atom/atom"
import './Console.css';

const Playground = () => {
  const html = useRecoilValue(HtmlState)
  const css = useRecoilValue(CssState)
  const js = useRecoilValue(JsState)

  const HTML =
    `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>playground</title>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
        `

  const [start, setStart] = useState(HTML)
  useEffect(() => {
    const timerId = setInterval(() => setStart(HTML), 200);
    return () => clearInterval(timerId);
  }, [html, css, js])

  return (
    <div className="playground">
      <iframe
        sandbox="allow-scripts"
        className="content"
        srcDoc={start}
      ></iframe>
    </div>
  )
}

export default Playground