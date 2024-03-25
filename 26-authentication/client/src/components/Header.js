import { NavLink } from "react-router-dom";

function Header({ darkMode, onDarkModeToggle }) {
    const handleModeClick = () => onDarkModeToggle()
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <nav>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/projects/new">New Project</NavLink>
            </nav>
            <button onClick={handleModeClick}>{ buttonText }</button>
        </header>
    )
}

export default Header;