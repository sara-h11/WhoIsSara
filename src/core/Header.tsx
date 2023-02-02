import ThemeColor from "./themeColor/ThemeColor";

function Header() {
    return ( 
        <header className="header">
            <ThemeColor/>
            <div className="top-menu menu-minimal">
                <ul>
                    <li className="active">
                        <a href="#about" id="about"><span className="icon fa fa-user-o"></span><span className="link">About</span></a>
                    </li>
                    <li className="">
                        <a href="#resume" id="resume">
                            <span className="icon fa fa-list-alt"></span>
                            <span className="link">Resume</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#works" id="works">
                            <span className="icon fa fa-object-ungroup"></span>
                            <span className="link">Works</span>
                        </a>
                    </li>
                        <li className="">
                            <a href="#blog" id="blog">
                                <span className="icon fa fa-commenting-o"></span>
                                <span className="link">Blog</span>
                            </a>
                        </li>
                        <li className="">
                            <a href="#contacts" id="contacts">
                                <span className="icon fa fa-envelope-o"></span>
                                <span className="link">Contact</span>
                            </a>
                        </li>
                    </ul>
            </div>
        </header>
     );
}

export default Header;