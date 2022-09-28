import React, { useEffect } from 'react'
import ProfileIntro from './ProfileIntro';
import ProfileSkills from './ProfileSkills';
import ProfileProjects from './ProfileProjects';

export default function Homepage() {
    document.title = "Shlok Zanwar";

    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;

    useEffect(() => {
        // This is for the viewport
        // If its a mobile device, then set the viewport to 800px
        setTimeout(() => {
            
            if(window.location.hash){
                const anchor = document.querySelector(window.location.hash)
                if(anchor){
                    console.log(anchor)
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
            }
        }, 200);
        // console.log(window.location.hash)

        if(isMobile){ 
            document.getElementsByTagName('meta')['viewport'].content='width=800;';
        }
        else{
            document.getElementsByTagName('meta')['viewport'].content='width=device-width, initial-scale=1';
        }
    }, []);

    return (
        <div style={{padding: "10px 0px 500px 0px"}} >
            <ProfileIntro isMobile={isMobile} />
            <ProfileSkills />
            <ProfileProjects />
        </div>
    )
}
