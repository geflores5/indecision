class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.removeSingle = this.removeSingle.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  removeAll() {
    this.setState(() => ({ options: [] }));
  }
  removeSingle(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handleDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This options already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  render() {
    const subtitle = 'I will choose your fate';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handleDecision={this.handleDecision} />
        <Options options={this.state.options} removeAll={this.removeAll} removeSingle={this.removeSingle} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handleDecision}>What should I do?</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
        {props.options.length > 0 ? 'Here are you options:' : 'No Options:'}
        <button onClick={props.removeAll}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              removeSingle={props.removeSingle}
            />
          ))
        }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.removeSingle(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['Default']}/>, document.getElementById('app'));