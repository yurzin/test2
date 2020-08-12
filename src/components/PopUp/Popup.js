import React, {Component} from "react";
import classes from "./Popup.module.css"

class Popup extends Component {

    clickHandler = () => {
        this.props.onClose()
    };

    render() {
        if (this.props.isOpen) {
            return (
                <div className={classes.Backdrop} onClick={this.clickHandler}>
                    <div className={classes.Popup} onClick={this.clickHandler}></div>
                </div>
            )
        } else return null
    }
}

export default Popup;
