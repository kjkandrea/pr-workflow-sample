import View from './View.js'

const AlertButton = new View()

AlertButton.setUp = function (el) {
  this.el = el
  this.render().bindEvents()
  return this
}

AlertButton.render = function () {
  this.el.innerText = 'Click Me!'
  return this
}

AlertButton.bindEvents = function () {
  this.el.addEventListener('click', this.onClickButton)
  return this
}

AlertButton.onClickButton = function () {
  alert('Click Button!')
}

export default AlertButton