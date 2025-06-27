import {useState} from 'react';

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
        />
    )
}