import View from './View.js'

const HelloWorld = new View()

HelloWorld.setUp = function (el) {
  this.el = el
  return this
}

export default HelloWorld