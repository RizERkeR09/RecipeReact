

export default function Head(prop){
    console.log(prop)
    return(
        <header>
            <nav>
            <img src={prop.img} alt="CheffLogo" className="img" />
            <h3> {prop.title}</h3>
            </nav>
        </header>
    )
}
