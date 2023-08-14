import '../styles/LoginPage.css'
import {InputText} from "primereact/inputtext";
 export default function Login(){
    return (
        <div className="login row">
            <div className="col d-flex flex-column">
                <label htmlFor="username" >Username</label>
                <InputText id="username" name="username"/>

                <label htmlFor="password" >Password</label>
                <InputText id="password" name="password" type="password"/>
            </div>
        </div>
    )
 }