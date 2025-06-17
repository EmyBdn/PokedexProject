import style from './SearchBar.module.css';

export function SearchBar({value, onChange}) {
    return (
        <>
            <input
                type='text'
                placeholder='Filter the pokemon list'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={style.searchBar}/>
        </>
    )
}