import { renderMobileNavbar, renderNavbar } from "../../components/navbar";
import { useResponsive } from "../../hook/useResponsive";
import Router from "../../Routes/router";
import { ActiveNavItemType, NavBarItem } from "../../types/types";

export let activeNavItem = <ActiveNavItemType> window.location.pathname
export const setActiveNavItem = (value:ActiveNavItemType) : void=>{
    activeNavItem = value;
}

export let md = useResponsive('md')
  


export const renderLayout =(children:HTMLElement) : HTMLDivElement=>{
    const layout = <HTMLDivElement> document.createElement('div');
    layout.className = 'w-full h-full flex flex-col justify-start items-start'

    const navbar : NavBarItem[] = [
        {
            index: 1,
            name:'/',
            label: 'Dashboard',
        },
        {
            index: 2,
            name:'/about',
            label: 'About us',
        },
    ]

    const nav = md ? renderMobileNavbar(navbar) : renderNavbar(navbar);
    
    layout.append(nav)
    layout.append(children)

    return layout
}

window.addEventListener('resize',()=>{
    md = useResponsive('md')
    Router()
  })