import style from '/src/pages/Details/Details.module.css';
import {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {getPokemonById, getReviewsList} from "../../api/api.jsx";
import {CONSTANTS} from "../../constants/constants.jsx";
import {ReviewsList} from "../../components/Reviews/ReviewsList/ReviewsList.jsx";
import {ReviewInput} from "../../components/Reviews/ReviewInput/ReviewInput.jsx";
import {postReview} from "../../api/api.jsx";
import {Link} from "react-router";
import {PokemonStatsList} from "../../components/PokemonStats/PokemonStatsList/PokemonStatsList.jsx";

export function Details() {
    const MAX_ID = 151;
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [reviewsList, setReviewsList] = useState([]);

    const numericId = Number(id);
    const previousId = numericId > 1 ? numericId - 1 : null;
    const nextId = numericId < MAX_ID ? numericId + 1 : null;

    useEffect(() => {
        getPokemonById({id, setPokemon});
    }, [id])

    useEffect(() => {
        getReviewsList({id, setReviewsList});
    }, [id]);

    function handleAddReview(content) {
        const newReview = {
            pokemonId: Number(id),
            author: "Me",
            content: content
        };

        postReview({
            review: newReview,
            onSuccess: () => getReviewsList({id, setReviewsList})
        });
    }


    return (
        <>
            <div className={style.navigationButtons}>
                {previousId &&
                    (<Link to={`/pokemon/${previousId}`}>
                            <button>Previous</button>
                        </Link>
                    )}
                {nextId &&
                    (<Link to={`/pokemon/${nextId}`}>
                        <button>Next</button>
                    </Link>)
                }
            </div>

            <div className={style.detailsContainer}
                 style={{
                     backgroundImage: `url(${CONSTANTS.POKEBALL_BACKGROUND})`,
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                 }}>

                <div className={style.illustrationContainer}>
                    {pokemon && <img className={style.illustration}
                                     src={`${CONSTANTS.POKEMON_IMG}/${pokemon.id}.svg`}
                                     alt={pokemon.name}
                    />}
                </div>

                <div className={style.statsContainer}>
                    {pokemon && <PokemonStatsList pokemon={pokemon}/>}
                </div>

                <div className={style.reviewsContainer}>
                    <h1>Reviews</h1>
                    <ReviewInput onSubmit={handleAddReview}/>
                    <ReviewsList reviewsList={reviewsList}/>
                </div>
            </div>
        </>
    )
}