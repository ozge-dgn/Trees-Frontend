import '../styles/Menu.css'
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import LogoMenu from './LogoMenu.js'
export default function LeftMenu({className}){
    const navigate = useNavigate();
    let items = [
        {label:"Home", command:()=>{ navigate("/home") }},
        {label:"About Us", command:()=>{ navigate("/about") }},
        {label:"Trees", command:()=>{ navigate("/trees") }}

    ];

    return (
        <>
            <LogoMenu className={"min-vh-100 "+className} model={items} logo="tree-logo-v2.webp"></LogoMenu>
        </>
    )
}