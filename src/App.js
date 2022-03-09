import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Books from "./pages/Books/index";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;