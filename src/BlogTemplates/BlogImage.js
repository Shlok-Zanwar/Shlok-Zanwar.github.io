import React from 'react'

const BlogImage = ({details}) => {
    return (
        <div className="blog-image-div" >
            <img src={details.src} className="blog-image" alt={details.alt} />
        </div>
    )
}

export default BlogImage
