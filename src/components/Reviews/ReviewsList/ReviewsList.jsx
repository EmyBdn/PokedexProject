import style from "./ReviewsList.module.css"
import {ReviewItem} from "./ReviewItem/ReviewItem.jsx";

/**
 * ReviewsList
 * Renders the list of all reviews associated with the selected Pokemon.
 */
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