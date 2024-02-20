import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Ecommerce from './components/ecommerce'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <Ecommerce />
    </BrowserRouter>,
)
