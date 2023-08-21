import SearchInput from "../components/SearchInput";

const HomePage = () => {

    return(
        <div className={'container'}>
            <div className={'search-container'}>
                <SearchInput/>
                <button id="search-byn">Search</button>
            </div>
            <div id={'result'}></div>
        </div>
    )
}
export default HomePage