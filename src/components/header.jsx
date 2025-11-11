function Header() {
    return(
        <section className="flex">
            <div>
                <p>My Balance</p>
                <p>$921.48</p>
            </div>
            <div className="flex">
                <img src="/images/logo.svg" alt="logo" />
            </div>
        </section>
    )
}

export default Header;