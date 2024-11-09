
// import UseState from './hooks/UseState'
// import UseEffect from './hooks/UseEffect'
import { TheamProvider } from './hooks/UseContext/content'
import UseContext from './hooks/UseContext/UseContext'
import './index.css'

function App() {


  return (
    // <UseState></UseState>
    // <UseEffect></UseEffect>
    <TheamProvider>
      <UseContext></UseContext>
    </TheamProvider>
  )
}

export default App
