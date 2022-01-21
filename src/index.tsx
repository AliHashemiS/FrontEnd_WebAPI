import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Dashboard, Login, NotFound, Register, RouterNavigator } from './app/components';
import { RouteModel } from './app/models';


const ROUTES:RouteModel[] = [
    {path: "register", component: Register },
    {path: "dashboard/*", component: Dashboard },
    {path: "/", component: Login },
    {path: "*", component: NotFound }
]


ReactDOM.render(
  <BrowserRouter>
    <RouterNavigator routes={ROUTES}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
