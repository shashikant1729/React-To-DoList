import React from 'react'
import './footer.css'

export default function Footer() {
    let footerStyle = {
        position: "fixed",
            padding: "10px 10px 0px 10px",
            bottom: "0",
            width:" 100%",
            /* Height of the footer*/ 
            height: "40px",
        background : "grey",

        
    }
    return (
        <footer className="bg-dark text-light p-1" style = {footerStyle}>
                <p className="text-center">

                    CpoyRight &copy; To-Do List.com
                </p>
          
       </footer>
    )
}
