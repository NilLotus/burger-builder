import React, {Component, Fragment} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    meat:1.5,
    bacon:1,
    salad: 0.5,
    cheese: 0.7
}
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad :0,
            cheese :0,
            bacon :0,
            meat :0
        },
        totalPrice: 4,
        purchasable: true,
        purchasing: false
    }
    updatePurchaseState=(ingredient)=>{
        let sum = Object.keys(ingredient)
            .reduce((sum, el) =>
        sum = sum + ingredient[el], 0);
        this.setState({purchasable: sum <= 0});
    }
    addIngredientHandler= (type) => {
        let updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type]++;
        let prevPrice= this.state.totalPrice;
        let itemPrice = INGREDIENT_PRICES[type];
        let newPrice = prevPrice + itemPrice;
        this.setState({ingredients: updatedIngredient, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredient)
    }
    removeIngredientHandler = (type) =>{
        let updateIngredient = {...this.state.ingredients}
        if(updateIngredient[type] <=0 ){
            return;
        }
        updateIngredient[type]--;
        let prevPrice = this.state.totalPrice;
        let itemPrice = INGREDIENT_PRICES[type];
        let newPrice = prevPrice - itemPrice;
        this.setState({ingredients: updateIngredient, totalPrice:newPrice});
        this.updatePurchaseState(updateIngredient)
    }
    purchaseHandler =() =>{
        this.setState({purchasing: true})
    }
    cancelPurchaseHandler =() =>{
        this.setState({purchasing: false})
    }
    continuePurchaseHandler =() =>{
        alert('Succeed!');
    }

    render() {
        const disableInfo ={...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0;
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients }
                        purchaseCancelled={this.cancelPurchaseHandler}
                        purchaseContinued={this.continuePurchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    showModal={this.purchaseHandler}
                />
            </Fragment>
        );
    }
}
export default BurgerBuilder;