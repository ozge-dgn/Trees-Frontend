import '../styles/MakePost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import {InputTextarea} from "primereact/inputtextarea";
export default function MakePost(){
    return(
        <div className="shadow make-post">
            <h4>Share your stories!</h4>
            <InputTextarea name="post" rows={5} cols={70} value={""} onChange={""} autoResize />
            <div>
                <button className="p-button p-button-rounded m-2" onClick={""}>Post!</button>
            </div>
        </div>
    )
}