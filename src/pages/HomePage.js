import '../styles/HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import LeftMenu from '../components/LeftMenu';
import TreeCount from '../components/TreeCount';
import MakePost from "../components/MakePost";
import Post from "../components/Post";

export default function HomePage(){

    return(
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col-3 flex-row">
                    <LeftMenu className="sticky-top "/>
                </div>
                <div className="col d-flex flex-column">
                    <MiddleColumn/>
                </div>
                <div className="col-md-3">
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
            <Post/>
        </>
    )
}

