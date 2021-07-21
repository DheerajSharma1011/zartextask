import React ,{useState,useEffect} from 'react';
import './Homepage.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
function Homepage(){
    const [data,setData] = useState();
    useEffect(()=>{
        fetchapi();
    },[]);
    const fetchapi = async()=>{
        const url ='https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'
        const response = await fetch(url);
        const responsejson = await response.json();
        // console.log(responsejson);
        setData(responsejson);
    }
   
     return(
         <>
        
         {data && data.map((e)=>{
             return(
                 <>
                 
                 <div className="Heading"><ArrowBackIcon  style={{margin:"2px 10px -5px"}}/>
                 {e.restaurant_name}
                 </div>
                 
                 
                 <nav className="nav-container">
                 <Link to="/salad" className="nav-a"><div className="navbar" >Salads and Soups</div></Link>
                     <Link to="/barnyard" className="nav-a"><div className="navbar" >From The Barnyard</div></Link>
                     <Link to="/henhouse" className="nav-a"><div className="navbar" >From the Hen House</div></Link>
                     <Link to="/sea" className="nav-a"><div className="navbar" >Fresh From The Sea</div></Link>
                     <Link to="/biryani" className="nav-a"><div className="navbar" >Biryani</div></Link>
                     <Link to="/fastfood" className="nav-a"><div className="navbar" >Fast Food</div></Link>
                   </nav>
                  
                 </>
             )
         })}
         </>
     )
}
export default Homepage;