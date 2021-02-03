import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      remainingChars: props.maxChars,
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      remainingChars: this.state.maxChars - event.target.value.length,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
