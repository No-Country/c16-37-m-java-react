import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import './index.css'
import Ecommerce from './components/ecommerce'
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
                <Ecommerce />
        </BrowserRouter>
    </Provider>
    ,
)
