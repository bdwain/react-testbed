import React from 'react';

class ReactTestbed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activated: true,
      currentProps: {}
    };
  }

  render(){
    const component = this.props.component;
    return React.createElement(component, this.state.currentProps);
  }
}

export default ReactTestbed;