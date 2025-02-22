import { Grid,Container } from '@mui/material';
import React,{useState,useEffect} from 'react'
import Header from './Header'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import  API from './Api.js';
import { Link } from 'react-router-dom';



function Shop() {
  const[ProductData,SetProductData] = useState([]);

    const [value] = React.useState(4);



  useEffect(() =>{
    fetch(`${API}/getproduct`)
    .then((response) => response.json())
    .then((data) => {   
       SetProductData(data);

    
    })
  },[]);

  return (
    <div>
      <Header />
     
     

        <Container style={{marginTop:"30px"}} maxWidth="xl">

       
          <Grid container>
          
        
{/*       
              <Grid item xs={12} md={6} lg={3}> 
            
  
              <Card variant='outlined' sx={{ maxWidth: 300 }}>
   
              <Typography style={{padding:"10px",fontSize:"20px",fontWeight:"600"}}>Catagories</Typography>
      <CardActions disableSpacing>
      
        <Typography style={{fontWeight:"600"}}>UOMO</Typography>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{textTransform:"lowercase"}} >ABBIGLIAMENTO</Typography>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography style={{textTransform:"lowercase"}}>CUSTOMIZED</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>ACCESSORI</Typography>
     
      <ExpandMore
        expand={expanded1}
        onClick={handleExpandClick1}
        aria-expanded={expanded1}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography  style={{textTransform:"lowercase"}}>BRACCIALI E ANELLI</Typography>
          <Typography  style={{textTransform:"lowercase"}}>COLLANE E ORECCHINI</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>DONNA</Typography>
     
      <ExpandMore
        expand={expanded2}
        onClick={handleExpandClick2}
        aria-expanded={expanded2}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography style={{textTransform:"lowercase"}} >ABBIGLIAMENTO</Typography>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography  style={{textTransform:"lowercase"}}>CUSTOMIZED</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>ACCESSORI</Typography>
     
      <ExpandMore
        expand={expanded3}
        onClick={handleExpandClick3}
        aria-expanded={expanded3}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded3} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{textTransform:"lowercase"}} >VINTAGE</Typography>
          <Typography style={{textTransform:"lowercase"}} >BRACCIALI E ANELLI</Typography>
          <Typography  style={{textTransform:"lowercase"}}>COLLANE E ORECCHINI</Typography>
          

        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      
      <Typography style={{fontWeight:"600"}}>Price</Typography>
     
      <ExpandMore
       
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>

        <CardContent>
        <Slider style={{color:"orangered"}}
        getAriaLabel={() => 'Temperature range'}
        value={valuee}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />
          

        </CardContent>
     
     

    </Card>
    <Hidden mdDown >
    <Typography style={{padding:"10px",fontWeight:600}}>TOP RATED PRODUCTS</Typography>
  </Hidden>
    {ProductData.slice(0,4).map(i => {
      return (
        <>
           <Link style={{textDecoration:"none"}} to={`/product_detail/${i._id}`}>
        <div style={{display:"flex",alignItems:"center", paddingBottom:"10px"}} >
            <img style={{width:"100px",padding:0,margin:0}} src={i.productimage} alt='' />
            <div style={{paddingLeft:"10px"}}>
                <Rating style={{fontSize:"20px"}} name="read-only" value={value} readOnly  />
                <p style={{color:"grey",lineHeight:"1"}}>{i.title}</p>
                <p style={{fontWeight:600,lineHeight:"0"}}> €{i.price}.00</p>
            </div>
        </div>
        </Link>
        </>
      )
    })}
    

              </Grid> */}
          
              <Grid item xs={12} md={6} lg={12}> 
                
                
              <Grid container spacing={2}>
        {ProductData.map(i => {
          return (
            <>
            
            <Grid item xs={6} md={6} lg={3} >
            <Link style={{textDecoration:"none"}} to={`/product_detail/${i._id}`}>
          <Card variant="outlined" sx={{ maxWidth: 325 }} style={{border:"none"}}>
        <CardActionArea>
          <CardMedia style={{height:"60vh"}} image={i.productimage} />
          
          <CardContent>
      <Rating style={{fontSize:"20px"}} name="read-only" value={value} readOnly />
            <Typography style={{ texAlign: "center", fontWeight: 400, fontSize: "13px", fontFamily: "Open Sans,sans-serif",lineHeight: 1.7, opacity: 0.8,  textTransform: "uppercase",textOverflow: "ellipsis", overflow: "hidden",whiteSpace: "nowrap",}} variant="body1"  color="textSecondary"  component="p">
            {i.cat}
            </Typography>
            <Typography style={{maxWidth: "100%",fontWeight: 500,fontSize: "17px", fontFamily:"Open Sans,sans-serif", lineHeight: 1.35,letterSpacing: "0.005em", marginBottom:"0.4rem", textOverflow: "ellipsis", overflow: "hidden",}} variant="body1" component="p">
             {i.title}
            </Typography>
            <Typography style={{ fontWeight: 600,fontSize: "17px", fontSamily: "Poppins,sans-serif",lineHeight: 1.35,  letterSpacing: "0.005em", marginBottom:"0.4rem", textOverflow: "ellipsis", overflow: "hidden",}} variant="h6" component="p">
            €{i.price}.00
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
      </Link>

          </Grid>
         
            
            </>
          )
        })}
        
 
      </Grid>

                
         
             


              </Grid>

              
          

          </Grid>
          </Container>

         
        
      </div>

    
  )
}

export default Shop
