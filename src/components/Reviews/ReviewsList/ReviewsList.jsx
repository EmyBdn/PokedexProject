import style from "../../PokemonList/PokemonList.module.css";
import {ReviewItem} from "./ReviewItem/ReviewItem.jsx";

export function ReviewsList({reviewsList}) {
    return (
        <>
            <div className={style.listContainer}>
                {reviewsList.map((review) => (
                    <ReviewItem key={review.id} review={review}/>
                ))}
            </div>
        </>
    )
}