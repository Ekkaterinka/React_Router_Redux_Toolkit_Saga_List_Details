import { Routes, Route } from "react-router-dom";
import List from './components/List'
import Details from "./components/Details";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/:id/details' element={<Details />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
