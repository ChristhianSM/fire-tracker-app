import spinner from './spinner.gif'

export const Loader = () => {
    return (
        <div className = 'loader'>
            <img src = {spinner} alt = 'Loading'></img>
            <h1>Searching...</h1>
        </div>
    )
}
