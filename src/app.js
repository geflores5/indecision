console.log('App.js is running.');

const app = {
  title: 'Indecision!',
  subtitle: 'I will decide for you',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderApp();
  }
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>    
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderApp();