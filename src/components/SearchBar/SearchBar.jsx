import style from './SearchBar.module.css';

/**
 * SearchBar
 * Input field used to filter the Pokemon list.
 * Triggers a callback on every change to update the filter.
 */
export function SearchBar({value, onChange}) {
    return (
        <>
            <input
                type='text'
                placeholder='Filter the pokemon list (by name, type or number)'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={style.searchBar}/>
        </>
    )
}