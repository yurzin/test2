import React, {Component} from 'react'
import classes from "./Form.module.css"
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import send from "../../../img/ic-send.svg"

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submit: true
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submit: !this.state.submit})
    }

    render() {
        if (this.state.submit) {
            return (
                <div className={classes.Form}>
                    <form className={classes.AuthForm} onSubmit={this.handleSubmit.bind(this)}>
                        <h3>Оставьте заявку, и мы позвоним вам <br/> в ближайшее время</h3>
                        <Input
                        />
                        <Button
                            status={this.state.submit}
                        >
                            <h2>отправить заявку</h2>
                            <img src={send} alt=""/>
                        </Button>
                    </form>
                </div>
            )
        } else return (<div className={classes.Form}>
            <form className={classes.AuthForm} onSubmit={this.handleSubmit.bind(this)}>
                <h1>Спасибо, что оставили заявку.<br/>
                    Мы скоро вам перезвоним. </h1>
                <Button
                status={this.state.submit}
                >
                    <h2>отправить заявку</h2>
                    <img src={send} alt=""/>
                </Button>
            </form>
        </div>)
    }
}

export default Form