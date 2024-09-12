import { setActiveNavItem } from "../../layouts/layout";
import Router from "../../Routes/router";

export const renderAbout = () : HTMLDivElement =>{

    const content = <HTMLDivElement> document.createElement('div');
    content.innerText = " About Us Maktab 18";

    const goHome = document.createElement('button');
    goHome.innerText = "Go to Home Page";
    goHome.onclick = () =>{
        window.history.pushState(null,'','/')
        setActiveNavItem('/')
        Router()
    }

    content.append(goHome)

    return content
}