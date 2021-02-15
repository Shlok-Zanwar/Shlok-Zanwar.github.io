import React from 'react'
import BlogButton from './BlogButton'
import BlogImage from './BlogImage'
import BlogList from './BlogList'
import BlogPara from './BlogPara'
import BlogSubheading from './BlogSubheading'
import BlogTitle from './BlogTitle'

function BlogTemplate({blogData}) {

    document.title = "Blogs | " + blogData[0].text + " | Shlok Zanwar"

    const getRandomNumber = () =>{
        return Math.floor(Math.random() * 100000);
    }

    const blog = blogData.map(index => {
        if(index.type === "title"){
            return <BlogTitle details={index} key={getRandomNumber()} />
        }
        else if(index.type === "paragraph"){
            return <BlogPara details={index} key={getRandomNumber()} />
        }
        else if(index.type === "subheading"){
            return <BlogSubheading details={index} key={getRandomNumber()} />
        }
        else if(index.type === "button"){
            return <BlogButton details={index} key={getRandomNumber()} />
        }
        else if(index.type === "list"){
            return <BlogList details={index} key={getRandomNumber()} />
        }
        else if(index.type === "image"){
            return <BlogImage details={index} key={getRandomNumber()} />
        }
        else{
            return <div className="blog-para"> ------ Could not render ------ </div>
        }
    })

    return (
        <div className="main-blog-div">
            {blog}
        </div>
    )
}

export default BlogTemplate
