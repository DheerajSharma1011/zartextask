import React ,{useState,useEffect} from 'react';
import './Salad.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function Salad(){
    const [dataone,setDataone] = useState();
    const [count,setCount] = useState(0);
    useEffect(()=>{
        fetchapi();
    },[]);
    const fetchapi = async()=>{
        const url ='https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'
        const response = await fetch(url);
        const responsejson = await response.json();
         console.log(responsejson[0].table_menu_list[0].category_dishes);
        setDataone(responsejson[0].table_menu_list[0].category_dishes);
    }
   function increment(x){
        setCount(count+1);
   }
   function decrement(y){
    if(count>0){
    setCount(count-1);}

}
     return(
         <>
         <div className="spn">My Order<AddShoppingCartIcon/>
          <div className="counter">{count}</div>
         </div>
         {dataone && dataone.map((e)=>{
             return(
                 <>
                
                 <div className="salad-container">
                     <div className="salad-Heading">
                         <p className="salad-bold">{e.dish_name}</p>
                         <p className="salad-bold">{e.dish_currency}   {e.dish_price}</p>
                         <p>{e.dish_description}</p></div>
                     <div className="salad-image"><img src={e.dish_image} alt="img" />
                     <div className="salad-calories">{e.dish_calories} Calories</div></div>
                     {e.addonCat!="" && <p className="customization">Customizations Available</p>}
                     <div className="btn"><button onClick={()=>increment(e.dish_id)}>+</button>
                     <div className="count">{count}</div>
                     <button onClick={()=>decrement(e.dish_id)}>-</button></div>
                
                    
                     
                     
                    
                 </div>
                 <hr></hr>
                    </>
             )
         })}
         </>
     )
}
export default Salad;