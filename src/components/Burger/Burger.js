import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css';

const burger=(props)=>{
    let transformedIngredients = Object.keys(props.ingredient).map(item => {
        let count = props.ingredient[item];
        let arr=[]
        for (let num=1 ;num<=count;num++){
            arr.push(<BurgerIngredient type={item} key={item + num} />)
        }
        return arr;
    });
    transformedIngredients = transformedIngredients.reduce((p, c)=>{ return p.concat(c)}, []);
    if(transformedIngredients.length===0){
        transformedIngredients =<p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}
export default burger;