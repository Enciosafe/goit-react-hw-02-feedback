import React from "react";
import Section from "./components/Section/Section";


class App extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

        incrementGood = () => {
            this.setState((prevState) => {
                return {
                    good: prevState.good + 1
                }
            })
        }

        incrementNeutral = () => {
            this.setState((prevState) => {
                return {
                    neutral: prevState.neutral + 1
                }
            })
        }

        incrementBad = () => {
            this.setState((prevState) => {
                return {
                    bad: prevState.bad + 1
                }
            })
        }




    render () {
        return <Section state={this.state}
                        incrementGood={this.incrementGood}
                        incrementNeutral={this.incrementNeutral}
                        incrementBad={this.incrementBad}
        />
    }
}


export default App;
