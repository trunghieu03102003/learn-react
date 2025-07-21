import './component/todo/todo.css';
import Header  from './component/layour/header';
import Footer from './component/layour/footer';
import { Outlet } from 'react-router-dom';
const App = () => {
  
  return (
    <>
    <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App