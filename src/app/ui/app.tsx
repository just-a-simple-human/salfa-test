import { Provider } from "react-redux"
import { store } from "#shared/lib/store.js"
import { Route, Routes } from "react-router-dom";
import HomePage from "#pages/home";
import CardPage from "#pages/card";

const  App: React.FC = () => {

  return (
    <Provider store={store}>
      <Routes>
        <Route element={<HomePage />} path="/"/>
        <Route element={<CardPage />} path="card/:id"/>
      </Routes>
    </Provider>
  )
}

export default App
