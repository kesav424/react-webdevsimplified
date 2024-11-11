
// import UseState from './hooks/UseState'
// import UseEffect from './hooks/UseEffect'
// import { TheamProvider } from './hooks/UseContext/content'
// import UseContext from './hooks/UseContext/UseContext'
// import UseReducer from './hooks/UseReducer/UseReducer'
import { useLocalStorage } from './customHooks/useLocalstorage'
import './index.css'

function App() {

  const [value, setValue] = useLocalStorage('name', '')

  return (
    // <UseState></UseState>
    // <UseEffect></UseEffect>
    // <TheamProvider>
    //   <UseContext></UseContext>
    // </TheamProvider>
    // <UseReducer></UseReducer>

    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className='border border-black'
    />
  )
}

export default App
