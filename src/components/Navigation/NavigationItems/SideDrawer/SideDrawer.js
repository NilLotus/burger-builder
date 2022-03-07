import React, {Fragment} from 'react';

import classes from './SideDrawer.module.css';
import NavigationItems from "../NavigationItems";
import Logo from "../../../Logo/Logo";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const sideDrawer =(props) =>{
    let attachedClasses =[classes.SideDrawer, classes.Open];
    if(!props.show){
        attachedClasses =[classes.SideDrawer, classes.Close]
    }
    return(
        <Fragment>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default sideDrawer;