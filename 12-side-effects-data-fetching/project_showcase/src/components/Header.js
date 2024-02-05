import {useEffect} from "react"

function Header({ darkMode, onDarkModeToggle }) {
    const handleModeClick = () => onDarkModeToggle()
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"
    // useEffect(() => {
    //     console.log('useEffect callback')
    //     const intervalId = setInterval(() => console.log('potato'), 2000)

    //     return () => {
    //         console.log('cleanup function to remove interval')
    //         clearInterval(intervalId)
    //     }
    // }, [])

    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <button onClick={handleModeClick}>{ buttonText }</button>
        </header>
    )
}

export default Header;