import { observable } from 'mobx'

class AppStore {
  @observable time = ''
  @observable todos = []
}

const App = new AppStore()

export default App
