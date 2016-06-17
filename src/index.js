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
    this.setState({
      activated: true,
      currentProps: JSON.parse(this.propsInput.value)
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
          <button onClick={this.submitProps}>Render with props</button>
        </div>
        <div>
          {maybeComponent}
        </div>
      </div>
    );
  }
}

export default ReactTestbed;