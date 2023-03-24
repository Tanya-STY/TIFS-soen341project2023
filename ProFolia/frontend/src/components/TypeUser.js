import React from "react";
import { Component } from "react";

class TypeUser extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        fetch('/typeuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type_of_user: this.state.selectedOption })
        })
            .then(response => {
                if (response.ok) {
                    // Redirect to the dashboard page if the user is logged in
                    if (this.props.isLoggedIn) {
                        window.location.href = '/homepage';
                    } else {
                        // Redirect to the login page if the user is not logged in
                        window.location.href = '/login';
                    }
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }


    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="radio">
                    <label> Would you like to navigate the website as a:
                        <input
                            type="radio"
                            value="Student"
                            checked={this.state.selectedOption === "Student"}
                            onChange={this.onValueChange}
                        />
                        Student
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Employer"
                            checked={this.state.selectedOption === "Employer"}
                            onChange={this.onValueChange}
                        />
                        Employer
                    </label>
                </div>
                <div>
                    Selected option is : {this.state.selectedOption}
                </div>
                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default TypeUser;