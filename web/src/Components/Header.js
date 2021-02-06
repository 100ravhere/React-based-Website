import {Link} from "react-router-dom";
import {Typography,Box} from "@material-ui/core";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
   categories:{
       color:"#8D9B6A",
       marginBottom:"3rem",
       fontFamily: "'Cormoran', serif"

   },

   typedContainer:{
       position:"fixed",
       top:"9%",
       left:"51%",
       transform:"translate(-50%,-50%)",
       width:"100vw",
       textAlign:"left",
       fontFamily:'Playfair Display',
       zIndex:1 

   }

}));


function Header(){
  const classes=useStyles();
    return(
    <div className="page">
  <header tabindex="0">PALAK SINGH</header>
  <div>
    
  </div>
  <Box className={classes.typedContainer}>

            <Typography className={classes.categories} variant="h6">
                <Typed strings={["Humanity","Computer Engineering","Web Development","Machine Learning","Blogging"]} typeSpeed={35} backSpeed={55} loop />
            </Typography>
        </Box>
  <div id="nav-container">
    <div className="bg"></div>
    <div className="button" tabindex="0">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
 
    </div>
 
    <div id="nav-content" tabindex="0">
      <ul>
        <li><Link to={"/"}>I</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/resume"} >Resume</Link></li>
        <li><a href="#0">Projects</a></li>
        <li><a href="#0">Portfolio</a></li>
        <li><a href="#0">Connect With ME</a></li>
      </ul>
    </div>
  </div>
  </div>
    );
}

export default Header;