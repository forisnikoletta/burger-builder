import React from 'react';
import cssClasses from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={cssClasses.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong> RON</p>
        
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)} 
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}

        <button className={cssClasses.OrderButton} 
                disabled={!props.purchasable} 
                onClick={props.ordered}>
        ORDER NOW
        </button>
    </div>
);

export default buildControls;