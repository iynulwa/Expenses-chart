function Header() {
    return(
        <section className="flex header">
            <div>
                <p>My balance</p>
                <p>$921.48</p>
            </div>
            <div className="flex">
                <img src="/images/logo.svg" alt="logo" />
            </div>
        </section>
    )
}

export default Header;