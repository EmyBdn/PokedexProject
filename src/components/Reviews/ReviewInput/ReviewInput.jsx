import {useState} from 'react';
import style from "./ReviewInput.module.css"

/**
 * ReviewInput
 * Input field for submitting a new review for a Pokemon.
 * Sends the review when the user presses the Enter key.
 */
export function ReviewInput({onSubmit}) {
    const [content, setContent] = useState('');

    function handleKeyDown(e) {
        if (e.key === "Enter" && content.trim() !== "") {
            onSubmit(content.trim());
            setContent("");
        }
    }

    return (
        <input
            type="text"
            placeholder='Add a review...'
            onChange={(e) => setContent(e.target.value)}
            value={content}
            onKeyDown={handleKeyDown}
            className={style.reviewInput}
            aria-label="Write and submit a review by pressing Enter"
        />
    )
}