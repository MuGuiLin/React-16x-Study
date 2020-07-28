import React from "react";

import './style.scss'

const Input = props => {
  return <input {...props} />;
};

// const CustomizeInput = ({value = "", ...props}) => (
//   <div style={{padding: 10}}>
//     <Input style={{outline: "none"}} value={value} {...props} />
//   </div>
// );

class CustomizeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {value = "", label = "" , ...otherProps} = this.props;
    return (
      <div className="my-input">
        <label>{label}</label>
        <Input style={{outline: "none"}} value={value} {...otherProps} />
      </div>
    );
  }
}

export default CustomizeInput;
