import React from "react";
import classes from "./Layout.module.css"
import Sensor from "../../components/Sensor/Sensor";
import Popup from "../../components/PopUp/Popup";
import Form from "../../components/Sensor/Form/Form";

class Layout extends React.Component {
    state = {
        popUp: false
    };

    popUpHandler = () => {
        this.setState({popUp: !this.state.popUp})
    };

    render() {
        return (
            <div className={classes.Layout}>
                <Sensor
                    onClick={this.popUpHandler}
                />
                <Form/>
                <Popup
                    isOpen={this.state.popUp}
                    onClose={this.popUpHandler}
                />
            </div>
        )
    }
}

export default Layout