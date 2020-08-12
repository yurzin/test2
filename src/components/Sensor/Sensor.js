import React, {Component} from "react";
import classes from "./Sensor.module.css"
import sensor from "../../img/im1.png"
import cam from "../../img/cam.png"

class Sensor extends Component {
    render() {
        return (
            <div className={classes.Sensor}>
                <div className={classes.Portrait}>
                    <img src={sensor} alt=""/>
                </div>
                <div className={classes.Description}>
                    <div className={classes.Left} onClick={this.props.onClick}>
                        <img src={cam} alt=""/>
                    </div>
                    <div className={classes.Right} onClick={this.props.onClick}>
                        <img src={cam} alt=""/>
                    </div>
                </div>
                <div className={classes.Acquire}>
                    <h2>Приобрести</h2>
                    <div className={classes.block}></div>
                    <div className={classes.block}></div>
                    <div className={classes.block}></div>
                    <div className={classes.block}></div>
                </div>
            </div>
        );
    }
}

export default Sensor;

