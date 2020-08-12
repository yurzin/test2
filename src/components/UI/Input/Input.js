import React, {Component} from "react";
import classes from "./Input.module.css"

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '+7 ___ ____ ____'
        };
    }

    handlePhoneChange(event) {
        console.log('handlePhoneChange', this);
        this.setState({phone: event.target.value});
    }

    render() {
        return (
            <div>
                <input
                    className={classes.Input}
                    value={this.state.phone}
                    onChange={this.handlePhoneChange.bind(this)}
                />
                {
                    isInvalid(this.props)
                        ? <span>{this.props.errorMessage || "Проверьте набранный номер"}</span>
                        : null
                }
            </div>
        )

    }

    // const inputType = props.type || "phone";
    // const cls = [classes.Input];

    // if (isInvalid(this.props)) {
    //     cls.push(classes.invalid)
    // }

};

export default Input