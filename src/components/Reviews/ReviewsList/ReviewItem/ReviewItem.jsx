export function ReviewItem({review}) {
    return (
        <div>
            <p>{review.content}</p>
            <span>Posted by : {review.author}</span>
        </div>
    )
}