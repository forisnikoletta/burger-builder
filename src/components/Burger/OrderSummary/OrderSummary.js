import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // TODO this could be a functional component, doesn't have to be a class
    
    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return ( <li key={key}>
                            <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                        </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A yummi burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
