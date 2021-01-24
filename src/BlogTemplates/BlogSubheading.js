import React from 'react'

const BlogSubheading = ({details}) => {
    return (
        <div className="blog-subheading" >
            {details.text}
        </div>
    )
}

export default BlogSubheading
