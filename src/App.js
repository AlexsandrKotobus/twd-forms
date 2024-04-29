import './App.css';
// import DradDrop from './pages/DragDrop/DradDrop';
import CustomForm from './components/Form/Form'
// РОУТИНГ
import { RouterProvider } from 'react-router-dom';
import router from './router';



//  !!! обычный
// function App() {
//   return (
//     <div className="App">
      
//        {/* <DradDrop/> */}
//        <CustomForm/>
     
//     </div>
//   );
// }


// РОУТИНГ
function App(){
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}


export default App;
