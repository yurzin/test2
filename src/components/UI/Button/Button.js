import React from "react";
import classes from "./Buttton.module.css"

const Button = props => {
    let cls;
    if (!props.status) {
    cls = classes.ButtonGray
} else {
        cls = classes.Button
    }
console.log(cls);
    return (
        <button
            onClick={props.onClick}
            className={cls}
        >
            {props.children}
        </button>
    )
};

export default Button