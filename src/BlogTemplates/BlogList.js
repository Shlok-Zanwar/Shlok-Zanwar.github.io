import React from 'react'

const BlogList = ({details}) => {

    const makeList = details.list.map(index =>
            <li key={index}>
                {index}
            </li>
    )

    return (
        <div className="blog-list" >
            <ul className="blog-list-ul">
                {makeList}
            </ul> 
        </div>
    )
}

export default BlogList
