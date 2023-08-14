import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import LeftMenu from "../components/LeftMenu";
import TreeCount from "../components/TreeCount";

export default function Trees(){
    return(
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col-3 flex-row">
                    <LeftMenu className="sticky-top "/>
                </div>
                <div className="col d-flex flex-column justify-content-center text-center">
                    <div className="embed-responsive embed-responsive-21by9 ">
                        <iframe className="embed-responsive" width="560" height="315" src="https://www.youtube.com/embed/zarll9bx6FI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="col-md-3">
                    <TreeCount/>
                </div>
            </div>
        </div>
    )
}