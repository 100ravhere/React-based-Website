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
       top:"8.5%",
       left:"52.5%",
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
      
    <header className="page">
  <header className="spacing">PALAK SINGH
  <Box className={classes.typedContainer}>
    <Typography className={classes.categories} fontSize="8px">
        <Typed strings={["Humanity","Computer Engineering","Web Development","Machine Learning","Blogging"]} typeSpeed={35} backSpeed={55} loop />
    </Typography>
  </Box>
  </header>
  
  <header id="nav-container">
<div className="bg"></div>
<div className="button" tabindex="0">
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</div>
<div id="nav-content" tabindex="0">
<ul>
  <li><Link to="/">I</Link></li>
<li><Link to="/blog">Blog</Link></li>
<li><Link to="/resume" >Resume</Link></li>
<li><Link to="/projects" >Projects</Link></li>
<li><Link to="/portfolio" >Portfolio</Link></li>
<li><Link to="/connectwithme" >Connect With Me</Link></li>
</ul>
</div>
</header>




  </header> 
    );
}

export default Header;