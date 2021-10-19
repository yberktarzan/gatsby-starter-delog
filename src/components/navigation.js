import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://discord.gg/9CE6CuqH3p">Discord Sunucusu</Link>
    <Link to="/contact">İletişim</Link>
    <ThemeChanger/>
  </nav>
  
)