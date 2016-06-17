import React from 'react';

class ReactTestbed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activated: false,
      currentProps: {}
    };
    this.submitProps = this.submitProps.bind(this);
  }

  submitProps(){
    let functions = this.functionInput.value.split(' ');
    let newProps = JSON.parse(this.propsInput.value);
    functions.reduce((cur, fn) => {
      cur[fn] = () => console.log(fn); 
      return cur;
    }, newProps);
    
    this.setState({
      activated: true,
      currentProps: newProps
    });
  }

  render(){
    let maybeComponent = this.state.activated ? React.createElement(this.props.component, this.state.currentProps) : null;

    return (
      <div>
        <div>
          <textarea name="props" ref={c => this.propsInput = c} />
        </div>
        <div>
          <div>Enter names of function props, separated by spaces. They will log their names to the console when called.</div>
          <textarea name="functionProps" ref={c => this.functionInput = c} />
        </div>
        <div>
          <button onClick={this.submitProps}>Render component</button>
        </div>
        <div>
          {maybeComponent}
        </div>
      </div>
    );
  }
}

export default ReactTestbed;