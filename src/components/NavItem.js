import { useContext } from "react";
import { Link } from "react-router-dom";
import { 
   PAGE_TITLE_SET,
   PAGE_CONTENT_SET,
   NAVBAR_ITEM_SET, 
} from "../utils/constants"
import { StoreContext } from "../store"

import products from "../json/products.json";
import perfume from "../json/perfume.json";
import bath from "../json/bath.json";
import candle from "../json/candle.json";
import diffuser from "../json/diffuser.json";

export default function NavItem(props) {
   const { children, to, className, activeClassName } = props

   const { state, dispatch } = useContext(StoreContext);
   const getJSON = url => {
      switch (url) {
         case "/perfume":
            return perfume;      
         case "/bath":
            return bath;      
         case "/candle":
            return candle;
         case "/diffuser":
            return diffuser;   
         default:
            return products;   
      }
   }
   
   const onClick= () => {
      console.log(children)
       dispatch({ 
          type: PAGE_TITLE_SET, 
          payload: children,
       });
       dispatch({ 
         type: PAGE_CONTENT_SET, 
         payload: getJSON(to),
      });
      dispatch({ 
         type: NAVBAR_ITEM_SET, 
         payload: to,
      });
    };
   return (
      <Link to={to}>
         <div
            onClick={onClick} 
            className={`
            ${className} 
            ${state.navBar.activeItem==to? activeClassName: ""}`}
         >
            {children}
         </div>
      </Link>
   );
}