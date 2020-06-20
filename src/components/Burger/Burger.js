import React from 'react';
import cssClasses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key= {ingredientKey + i} type={ingredientKey} />
            });

    }).reduce((rootArray, givenElement) => {
        return rootArray.concat(givenElement)
    }, []);
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    };
    
    return (
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;