import '../styles/RegisterPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "primereact/button";
import ButtonBundle from "../components/ButtonBundle";
import {useNavigate} from "react-router-dom";
export default function RegisterPage(){
    const navigate = useNavigate();
    const goBack=(e)=>{
        navigate("/")
    }
    return(
        <div className="container d-flex flex-column min-vh-100 justify-content-center bg-register min-vw-100">
            <div className="row d-flex flex-row  justify-content-center">
                <div className="col-6 register shadow ">
                    <RegisterInput className="reg-input"/>
                    <ButtonBundle  buttonBundle={[{name:"Register",colorClass:""}, {name:"Cancel",colorClass:"p-button-danger"}]} buttonHandlers={[goBack,goBack]}></ButtonBundle>
                </div>

            </div>

        </div>
    )
}

function RegisterInput({className}){
    return(
            <div className={className}>
                <label htmlFor="username" >Username</label>
                <input id="username" name="username"/>

                <label htmlFor="password" >Password</label>
                <input id="password" name="password" type="password"/>
            </div>
    )
}