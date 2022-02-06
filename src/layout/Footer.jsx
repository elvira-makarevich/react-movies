function Footer() {
    return <footer className="teal lighten-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>

}
export { Footer }