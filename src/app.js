console.log('App.js is running.');

const app = {
  title: 'Indecision!',
  subtitle: 'I will decide for you',
  options: []
}

const onRemoveOne = () => {
  console.log('remove this one!')
  render();
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      {app.options.length > 0 && <button onClick={onMakeDecision}>If you die, you die.</button>}

      <ol>
        {
          app.options.map((opt) => {
            return (
              <div key={opt}>
                <li>{opt} <button onClick={onRemoveOne}>Remove</button></li>
              </div>
            )
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button> 
      </form>
      <button onClick={onRemoveAll}>Remove All</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();