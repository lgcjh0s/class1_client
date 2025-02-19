import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./page/list.page";
import Detail from "./page/detail.page";
import { Provider } from "jotai";

const App = () => {
    return (
        <Provider>
            <BrowserRouter>
            </BrowserRouter>
        </Provider>
    )
}

export default App;