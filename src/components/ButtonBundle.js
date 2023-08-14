import '../styles/ButtonBundle.css'
import {Button} from "primereact/button";

export default function ButtonBundle({className,buttonBundle,buttonHandlers}){
    return(
        <div className={className ? className+" bundle" :"bundle"}>
            {
                buttonBundle.map((button,index)=>(
                        <Button className={button.colorClass} key={index} onClick={buttonHandlers[index]}>{button.name}</Button>
                ))
            }
        </div>
    )
}