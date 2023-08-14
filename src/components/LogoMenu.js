import '../styles/Menu.css'
export default function LogoMenu({model,logo,className}){

    return(
        <div className={"shadow menu "+className}>
            <div className="logo ">
                <img src={require(`../assets/${logo}`)} alt="tree logo"/>
            </div>

            {
                model.map((item)=>(
                    <>
                        <MenuItem className="p-1" item={item}></MenuItem>
                    </>
                ))
            }
        </div>
    )
}

function MenuItem({item,className}){
    return(
        <div className={"item "+className} onClick={item.command?item.command:()=>{}}>
            <p>{item.label}</p>
        </div>
    )
}