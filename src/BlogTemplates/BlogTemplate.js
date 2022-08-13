import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogButton from './BlogButton'
import BlogImage from './BlogImage'
import BlogList from './BlogList'
import BlogPara from './BlogPara'
import BlogSubheading from './BlogSubheading'
import BlogTitle from './BlogTitle'
import { SemipolarLoading } from 'react-loadingg';
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function BlogTemplate() {
    const navigate = useNavigate(); //
    const [blogData, setBlogData] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const blogId = useParams().id;

    const action = key => (
        <React.Fragment>
            <>
            <div onClick={() => { window.location.reload() }} style={{background:"transparent", border:"none", cursor:"pointer", color:"rgb(251, 255, 3)", paddingRight:"8px", textDecoration:"underline", fontWeight:"bolder" }}>
                Reload ?
            </div>
            </>
        </React.Fragment>
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log(blogurl)
        document.title = "Blogs | Shlok Zanwar"
        axios.get(`/blogs/${blogId}`)
            .then(res => {
                // console.log(res.data);
                setBlogData(JSON.parse(res.data.blogDetail))
                document.title = "Blogs | " + JSON.parse(res.data.blogDetail)[0].text + " | Shlok Zanwar";
                window.scrollTo(0, 0);
            })
            .catch(err => {
                console.log(err)
                if(err.request.status === 0){
                    enqueueSnackbar("Something went wrong !!", {
                        variant: 'error',
                        anchorOrigin:{
                            vertical:"top",
                            horizontal:"center"
                        },
                        action
                    })
                }
                else{
                    enqueueSnackbar("Blog not found", {
                        variant: 'error',
                        anchorOrigin:{
                            vertical:"top",
                            horizontal:"center"
                        }
                    })
                    navigate("/")
                }
            })

        
    }, [])
    
    // if(blogData.length > 0){
    //     document.title = "Blogs | " + blogData[0].text + " | Shlok Zanwar";
    // }

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
            {blogData.length === 0 ? <SemipolarLoading   size="large" color="rgb(251, 255, 3)" /> : blog}
        </div>
    )
}

export default BlogTemplate
