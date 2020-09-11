import View from './View.js'

const HelloWorld = new View()

HelloWorld.setUp = function (el) {
  this.el = el
  this.render()
  return this
}

HelloWorld.render = function () {
  this.el.innerText = 'Hello, World!'
  return this
}

export default HelloWorld