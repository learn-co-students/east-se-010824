import TabCard from "./TabCard"

function Header({ tabs }) {
    console.log(tabs)
    // const { tabs } = props
    const tabCards = tabs.map((tab) => <TabCard key={tab.id} name={tab.name} />)
    return (
        <nav>
            <h1>Project Showcase</h1>
            { tabCards }
        </nav>
    )
}

export default Header;