import { useEffect, useState } from 'react'
import './CssFile/Nav.css'
import {Link,Outlet} from 'react-router-dom';
export const NavBar = () =>{
    const [click,SetClick] = useState(false);
    useEffect(() => {
        let nav_on_off = document.querySelectorAll("#nav-sidebar-move");
        if(click){
            nav_on_off.forEach((nav)=>{
                nav.classList.add('active')
            })
        }
        else{
            nav_on_off.forEach((nav_on_off)=>{
                nav_on_off.classList.remove('active')
            })
        }


    },[click]);
    return <><nav id='nav-sidebar-move' 
    // onMouseEnter={() => SetClick(false)} onMouseLeave={() => SetClick(true)}
    > 
            <div className='nav-menu' onClick={() => SetClick(!click)}>
            <img src={require('./PicAndIcon/list.png')}/> 
            </div>
            {/* <div className='nav-topic' id='nav-sidebar-move'>
                Deammy
            </div> */}
            <Link to ="/">
                <div className='nav-button' id='nav-sidebar-move'>
                    <img src={require('./PicAndIcon/home.png')}/>
                    <span>Home</span>
                </div>
            </Link>
            <Link to ="/product">
                <div className='nav-button' id='nav-sidebar-move'>
                    <img src={require('./PicAndIcon/copy-writing.png')}/>
                    <span>Blog</span>
                </div>
            </Link>
            <div className='nav-underline'/>
            <div className='nav-button' id='nav-sidebar-move'>
                <img src={require('./PicAndIcon/user.png')}/>
                <span>Profile</span>
            </div>
            <div className='nav-contact-me' id='nav-sidebar-move'>
                <div className='nav-contact-me-text' id='nav-sidebar-move'>
                    <span>Contact</span>
                </div>
                <img src = {require("./PicAndIcon/aXxBBP2_700b.jpg")} className='dot' id='nav-sidebar-move'/>
            </div>
            <div className='nav-button me-profile' id='nav-sidebar-move' href = "https://github.com/Deammy">
                <img src={require('./PicAndIcon/25231.png')} className='git'/>
                <span>Deammy</span>
            </div>
            <div className='nav-button me-profile' id='nav-sidebar-move' href = "https://github.com/Deammy">
                <img src={require('./PicAndIcon/87390.png')} className='git'/>
                <span>deam.my_</span>
            </div>
        


    </nav>
    <Outlet/>
    </>


}
