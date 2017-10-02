'use strict';

console.log('App.js is running.');

var app = {
  title: 'Indecision!',
  subtitle: 'I will decide for you',
  options: []
};

var onRemoveOne = function onRemoveOne() {
  console.log('remove this one!');
  render();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    app.options.length > 0 && React.createElement(
      'button',
      { onClick: onMakeDecision },
      'If you die, you die.'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (opt) {
        return React.createElement(
          'div',
          { key: opt },
          React.createElement(
            'li',
            null,
            opt,
            ' ',
            React.createElement(
              'button',
              { onClick: onRemoveOne },
              'Remove'
            )
          )
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
render();
