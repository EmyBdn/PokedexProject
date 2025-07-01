import style from '/src/pages/Details/Details.module.css';
import {useState, useEffect} from 'react';
import {useParams} from "react-router";
import {getPokemonById, getReviewsList, updateLikesCount} from "../../api/api.jsx";
import {CONSTANTS} from "../../constants/constants.jsx";
import {ReviewsList} from "../../components/Reviews/ReviewsList/ReviewsList.jsx";
import {ReviewInput} from "../../components/Reviews/ReviewInput/ReviewInput.jsx";
import {postReview} from "../../api/api.jsx";
import {Link} from "react-router";
import {PokemonStatsList} from "../../components/PokemonStats/PokemonStatsList/PokemonStatsList.jsx";
import {PokemonTypeBadge} from "../../components/PokemonStats/PokemonTypeBadge/PokemonTypeBadge.jsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

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

    function handleLike() {
        const updatedLike = pokemon.like + 1;

        updateLikesCount({id, newLikeCount: updatedLike}).then((updatedData) => {
            setPokemon(prev => ({...prev, like: updatedData.like}));
        });
    }

    return (
        <div className={style.detailsPageContainer} style={{
            backgroundImage: `url(${CONSTANTS.POKEBALL_BACKGROUND})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
        }}>
            <div className={style.navigationButtons}>
                {previousId ? (
                    <Link to={`/pokemon/${previousId}`}>
                        <FaArrowLeft className={style.arrow} aria-label="Previous Pokemon"/>
                    </Link>
                ) : (
                    <div className={style.arrowPlaceholder}/>
                )}

                {nextId ? (
                    <Link to={`/pokemon/${nextId}`}>
                        <FaArrowRight className={style.arrow} aria-label="Next Pokemon"/>
                    </Link>
                ) : (
                    <div className={style.arrowPlaceholder}/>
                )}
            </div>


            <div className={style.detailsContainer}>

                <div className={style.illustrationContainer}>
                    {pokemon && <img className={style.illustration}
                                     src={`${CONSTANTS.POKEMON_IMG}/${pokemon.id}.svg`}
                                     alt={`Illustration of ${pokemon.name}`}
                    />}
                </div>

                {pokemon && <div className={style.infosContainer}>
                    <h1>{pokemon.name}</h1>
                    <PokemonTypeBadge types={pokemon.types}/>
                    <PokemonStatsList base={pokemon.base}/>
                </div>}

                <div className={style.reviewsContainer}>

                    <div className={style.reviewsHeader}>
                        {pokemon && <div className={style.likesContainer}>
                        <button onClick={handleLike} aria-label="Like this Pokemon">♥️</button>
                        <p>{pokemon.like}</p>
                    </div>}
                        <h1>Reviews</h1>
                    </div>

                    <ReviewInput onSubmit={handleAddReview}/>
                    <ReviewsList reviewsList={reviewsList}/>
                </div>
            </div>
        </div>
    )
}