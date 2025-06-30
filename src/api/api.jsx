const baseUrl = import.meta.env.VITE_BASE_URL;
const allPokemons = import.meta.env.VITE_GET_ALL_POKEMONS;
const onePokemon = import.meta.env.VITE_GET_ONE_POKEMON;
const reviews = import.meta.env.VITE_GET_REVIEWS;


export async function getPokemonList({setPokemonList}) {
    try {
        const response = await fetch(`${baseUrl}${allPokemons}`);
        const data = await response.json();
        setPokemonList(data);
    } catch (error) {
        console.error(error);
    }
}

export async function getPokemonById({id, setPokemon}) {
    try {
        const response = await fetch(`${baseUrl}${onePokemon.replace(":id", id)}`);
        const data = await response.json();
        setPokemon(data);
    } catch (error) {
        console.error(error);
    }
}

export async function getReviewsList({id, setReviewsList}) {
    try {
        const response = await fetch(`${baseUrl}${reviews.replace(":id", id)}`);
        const data = await response.json();
        setReviewsList(data);
    } catch (error) {
        console.error(error);
    }
}

export async function postReview({ review, onSuccess }) {
    try {
        const response = await fetch(`${baseUrl}/reviews/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la création de la review");
        }

        if (onSuccess) onSuccess();
    } catch (error) {
        console.error("Erreur postReview:", error);
    }
}

export async function updateLikesCount({ id, newLikeCount }) {
    try {
        const response = await fetch(`${baseUrl}${onePokemon.replace(":id", id)}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ like: newLikeCount })
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la mise à jour des likes :", error);
    }
}
