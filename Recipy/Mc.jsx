import Head from "./Heaer"
import Car from "../images/Car.jpg"
import Body from "./Body"

export default function Mc(){

    return(
        <>
        <Head 
        img={Car}
        title={"Chef Claud"}
        />
        <Body />
        </>
    )
}