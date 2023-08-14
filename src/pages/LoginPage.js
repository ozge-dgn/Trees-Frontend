import '../styles/LoginPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {Link} from "react-router-dom";
import Login from "../components/Login";

export default function LoginPage(){
    return (
        <div className="container-fluid bg">
            <div className="row vh-100">
                <div className="col left-column ">
                    <LeftCol/>
                </div>
                <div className="col-5 right-column">
                    <RightCol/>

                </div>
            </div>
        </div>
    );
}

//Left column content
function LeftCol(){
    return(
        <div>
            <h2>Save the World</h2>
            <h3>one tree at a time!</h3>
        </div>
    )
}

//Right column content
function RightCol(){
    return(
        <div className="rcol text-white">
            <h1>Welcome</h1>
            <Login/>
            <p>If you don't have an account <Link to="./register">register</Link> here</p>
            <Button className="p-button-rounded">Login</Button>
        </div>

    )
}

