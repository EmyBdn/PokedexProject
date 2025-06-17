import {useEffect, useState} from "react";
import {getPokemonList} from "../../api/api.jsx";
import {PokemonList} from "../../components/PokemonList/PokemonList.jsx";
import {SearchBar} from "../../components/SearchBar/SearchBar.jsx";
import { filterPokemons } from "/src/utils/utils.jsx"
import style from "./HomePage.module.css"

export function HomePage() {
    const [pokemonList, setPokemonList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getPokemonList({setPokemonList});
    }, [])

    const filteredPokemons = filterPokemons(pokemonList, search);

    return (
        <div className={style.homeContainer}>
            <SearchBar value={search} onChange={setSearch} />

            {filteredPokemons.length === 0 && search.trim() !== "" ? (
                <p>
                    No results found for "{search}"
                </p>
            ) : (
                <PokemonList pokemonList={filteredPokemons} />
            )}
        </div>
    )
}