let head = (fullTag) => document.head.insertAdjacentHTML("beforeend", fullTag)
let css = (src) => document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${src}" />`)
head(`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">`)
head(`
<style>
    body {
        background-color: #1a2327;
        width: 800px;
        padding-top: 50px;
        color: #e0e0e0;
    }
    li.L0, li.L1, li.L2, li.L3, li.L5, li.L6, li.L7, li.L8 {
        list-style-type: decimal;
    }
    li.L1, li.L3, li.L5, li.L7, li.L9 {
        background: inherit;
    }
    #output {
        padding-bottom: 50px;
    }
</style>`)
css("https://cdn.jsdelivr.net/gh/alum/markdown-css-themes@gh-pages/screen.css")
css("https://cdn.jsdelivr.net/gh/stalingino/code-prettify@v1.0.2/styles/sunburst.css")

import {showdown} from "https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"
import "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
import "https://cdn.jsdelivr.net/npm/showdown-prettify@1.3.0/dist/showdown-prettify.min.js"

let elem = (tag, props, children) => {
    let e = document.createElement(tag)
    if (props) for (let k in props) e[k] = props[k]
    if (children) for (const c of children) e.appendChild(c)
    return e
}
document.body.prepend(elem('logo', {style: 'padding: 100px 10px 50px;display: block'}, [elem('img', {
    src: 'https://dvarasolutions.com/wp-content/uploads/2021/08/logo-small.png',
    alt: 'Dvara Solutions', style: 'filter: brightness(0) invert(1)'
})]))

let show = new showdown.Converter({extensions: ['prettify']});

let input = document.getElementsByTagName('pre')[0]
let output = elem('div', {id: 'output', class: 'markdown-body'})
document.body.appendChild(output)
output.innerHTML = show.makeHtml(input.innerHTML)
input.parentNode.removeChild(input)
