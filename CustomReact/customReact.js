    //How React sees the HTML element
let ReactElement={
        type:"a",
    
        href:"https://facebook.com",
        traget:"_main"
        ,
        children:"Visit Facebook"

};
//function to render ReactElement
function customRender(ReactElement,Container){
    const Element =document.createElement(ReactElement.type);
    Element.setAttribute('href',ReactElement.href);
    Element.setAttribute('target',ReactElement.traget);
    Element.innerHTML=ReactElement.children;
    Container.appendChild(Element);//append the HTML type React element to HTMl
}

//another ELement to render 
let anotherElement ={
    type:"a",
    props:{
            
    href:"https://google.com",
    traget:"_main",
    children:"Visit Google"
    },
}
//just another but better way
function Render(anotherElement,container){
    const Element=document.createElement(anotherElement.type);
    Element.innerHTML=anotherElement.props.children
    for (const prop in anotherElement.props) {
        if(prop==="children") continue;
        Element.setAttribute(prop,anotherElement.props[prop])
    }
    container.appendChild(Element);

}

//Dom of a div where the Element is to be rendered
const mainContainer=document.getElementById("root");
customRender(ReactElement,mainContainer);
Render(anotherElement,mainContainer);

