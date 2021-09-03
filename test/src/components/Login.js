import react, {Component} from "react";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        });
    }


    render() {
        let word = this.state.isLoggedIn ? "Logged In" : "Logged Out";
        return(
            <div>
                <button onClick={this.handleClick}>{word}</button>
            </div>
        )
    }
}

export default Login;
