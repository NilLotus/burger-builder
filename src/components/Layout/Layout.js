import React, {Fragment, Component} from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";

class Layout extends Component{
    state={
        showDrawer: false
    }
    cancelBackdropHandler=()=>{
        this.setState({showDrawer: false})
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showDrawer: !prevState.showDrawer}
        })
    }
    render(){
        return(
            <Fragment>
                <Toolbar opened={this.sideDrawerToggleHandler}/>
                <SideDrawer show={this.state.showDrawer} closed={this.cancelBackdropHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout;