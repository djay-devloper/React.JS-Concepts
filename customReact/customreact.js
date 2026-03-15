//Instead of using ReactDom.createRoot() to create reactElement, we are creating our own reactElement.
const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


//Again our custom render function instead of using in built render of react.
function customRender(reactElement, container){
    //Firstly we create DOM element like react create virtual DOM then inject it to container. And again container is html tag.

    //this is a first method 
    /*
    const domElement= document.createElement(reactElement.type)

    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    //This is a more modular method.
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children

    for(const prop in reactElement.props){
        if(prop== 'children'){continue}

        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
    }
}

const mainContainer= document.querySelector('#root')


customRender(reactElement, mainContainer)




