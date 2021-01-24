import React from 'react'

const BlogButton = ({details}) => {

    const handleClick = (url) => {
        window.location.href = url;
    }

    return (
        <button className="redirect-button" onClick={() => handleClick(details.click)} >
            {details.text}
        </button>
    )
}

export default BlogButton
