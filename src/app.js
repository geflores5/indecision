class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }
  removeAll() {
    this.setState(() => {
      return {
        options: []
      }
    });
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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'I will choose your fate';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handleDecision={this.handleDecision} />
        <Options options={this.state.options} removeAll={this.removeAll} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
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
      <div>
        {props.options.length > 0 ? 'Here are you options:' : 'No Options:'}
        <button onClick={props.removeAll}>Remove All</button>
      </div>
      <ol>
        {props.options.map((option) => <li key={option}><Option optionText={option} /></li>)}
      </ol>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
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
    this.setState(() => {
      return {
        error
      }
    });
    e.target.elements.option.value = '';
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));