import HelloWorld from '../Views/HelloWorld.js'

const Controller = {}

Controller.init = () => {
  HelloWorld.setUp(document.getElementById('hello-world'))
}

export default Controller