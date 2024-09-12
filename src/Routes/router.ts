import { renderLayout } from "../layouts/layout";
import { renderAbout } from "../pages/about";
import { renderDashboard } from "../pages/dashboard";
import usersPage from "../pages/users";

const app = <HTMLDivElement> document.getElementById('app');

export default function Router(){
    app.innerHTML = ""

    const pathname:string = window.location.pathname

    switch(pathname){
        case '/':
            app.append(renderLayout(renderDashboard()))
            break;
        case "/about":
            app.append(renderLayout(renderAbout()))
            break;
        case "/users":
            app.append(renderLayout(usersPage()))
            break
        default:
            app.append('Page not found')
    }
}