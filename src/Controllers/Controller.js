import HelloWorld from '../Views/HelloWorld.js'
import AlertButton from '../Views/AlertButton.js'

const Controller = {}

Controller.init = () => {
  HelloWorld.setUp(document.getElementById('hello-world'))
  AlertButton.setUp(document.getElementById('alert-button'))
}

export default Controller