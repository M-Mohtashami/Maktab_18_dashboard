import { activeNavItem, setActiveNavItem } from "../../layouts/layout";
import Router from "../../Routes/router";
import { NavBarItem } from "../../types/types";

export const renderNavbar = (navbar:NavBarItem[]) :HTMLDivElement=> {
    const nav = <HTMLDivElement> document.createElement('div');
    nav.className = 'w-full p-5 flex items-center gap-4 bg-slate-500 justify-center';
    navbar.map((item:NavBarItem)=>{

        const navItem = <HTMLSpanElement> document.createElement('span');
        navItem.className = `text-white p-2 border-white cursor-pointer ${activeNavItem === item.name ? 'font-medium border-b-2 ' : 'font-normal border-b '}`;
        navItem.innerText = item.label
        navItem.dataset.name = item.name;
        navItem.dataset.index = item.index.toString();
        navItem.onclick = () =>{
            window.history.pushState(null,'',item.name)
            setActiveNavItem(item.name)
            Router()
        }
        nav.append(navItem);
    }
    )
return nav
}

export const renderMobileNavbar =(navbar:NavBarItem[]) :HTMLDivElement=> {
    const nav = <HTMLDivElement> document.createElement('div');
    nav.className = 'w-full p-5 flex items-center gap-4 bg-slate-500 justify-center';
    const menuIcon = <HTMLImageElement> document.createElement('img');
    menuIcon.src = '../../../src/assets/ic_round_menu.svg'
    menuIcon.className = 'w-12 h-12 cursor-pointer';
   nav.append(menuIcon)
return nav
}

