

export default function Head(prop){
    return(
        <header>
            <nav>
            <img src={prop.img} alt="CheffLogo" className="img" />
            <h3> {prop.title}</h3>
            </nav>
        </header>
    )
}
