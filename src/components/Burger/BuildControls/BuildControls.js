import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";


const controls = [
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Salad', type:'salad'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>
            <BuildControl
                label={ctrl.label}
                key={ctrl.type}
                added={()=> props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />)
        }
        <button
            className={classes.OrderButton}
            disabled={props.purchasable}
            onClick={props.showModal}
        >
            Order Now!
        </button>
    </div>
)

export default buildControls;