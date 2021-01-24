import React from 'react'

const BlogTitle = ({details}) => {
    return (
        <div className="blog-title" >
            {details.text}
        </div>
    )
}

export default BlogTitle
