import '../styles/LeftMenu.css'
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import {Menu} from "primereact/menu";
import {useRef} from "react";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";
export default function LeftMenu(){
    let items = [
        {
            label: "",
            items:[{
                template: (item, options) => {
                    return (
                        <div>
                            <img src={require("../assets/tree-logo-v2.webp")}/>
                        </div>
                    )
                }
            },{label: 'Home',command:()=>{

                }}]
        }
        ,
        {
            label: "",
            items:[{label: 'Trees',command:()=>{

                }}]
        }
        ,
        {
            label: "",
            items:[{label: 'About Us',command:()=>{

                }}]
        }

    ];

    return (
        <>
            <Menu className="flex-grow-1" model={items}></Menu>
        </>
    )
}