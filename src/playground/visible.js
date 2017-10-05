class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visible: false,
    }
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visiblility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
        {this.state.visible && <p>Hey, These are some details you can now see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

// const toggle = {
//   visbile: true,
//   status: 'Hide details'
// }
// const onToggle = () => {
//   if (toggle.visbile) {
//     toggle.visbile = false;
//     toggle.status = 'Show details';
//   } else {
//     toggle.visbile = true;
//     toggle.status = 'Hide details';
//   }
//   render();
// }
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>{toggle.status}</button>
//       {toggle.visbile && <p>Hey, These are some details you can now see!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// render();