import React from "react";
import Section from "./components/Section/Section";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = (e) => {
    this.setState((prevState) => {
      switch (e.target.name) {
        case "good":
          return {
            good: prevState.good + 1,
          };
        case "neutral":
          return {
            neutral: prevState.neutral + 1,
          };
        case "bad":
          return {
            bad: prevState.bad + 1,
          };
        default:
          return null;
      }
    });
  };

  render() {
    return (
      <Section
        state={this.state}
        options={{
          onIncrement: this.onIncrement,
        }}
      />
    );
  }
}

export default App;
