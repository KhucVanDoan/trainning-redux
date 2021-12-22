import { useRoutes } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStuden';
import Home from './components/Home';
const router=[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/add',
    element:<AddStudent/>
  },
  {
    path:'/edit/:id',
    element:<EditStudent/>
  },
]
function App() {
  return useRoutes(router)
}

export default App;
