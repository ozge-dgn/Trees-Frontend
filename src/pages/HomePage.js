import '../styles/HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import LeftMenu from '../components/LeftMenu';
import TreeCount from '../components/TreeCount';
import {Menu} from "primereact/menu";

export default function HomePage(){

    return(
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col vh-100">
                    <LeftMenu/>
                </div>
                <div className="col d-flex flex-column">
                    <MiddleColumn/>
                </div>
                <div className="col">
                   <TreeCount/>
                </div>
            </div>
        </div>
    )

}

function MiddleColumn(){
    return(
        <>
            <MakePost/>
            <Posts/>
        </>
    )
}
function MakePost(){
    return(
        <>
            create your post
        </>
    )
}
function Posts(){
    return(
        <>
            bunch of posts
        </>
    )
}