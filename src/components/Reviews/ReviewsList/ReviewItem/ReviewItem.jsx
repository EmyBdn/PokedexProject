import style from "./ReviewItem.module.css";

/**
 * ReviewItem
 * Displays a single review, showing the author's name and their message.
 */
export function ReviewItem({review}) {
    return (
        <div className={style.reviewItem}>
            <p>{review.content}</p>
            <span>Posted by : {review.author}</span>
        </div>
    )
}