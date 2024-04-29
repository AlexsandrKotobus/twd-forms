import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Homepage from './pages/Homepage';
import DragDrop from './pages/DragDrop/DradDrop';
import Form from './components/Form/Form'
import {Layout} from './routcomponents/Layout';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="dragdrop" element={<DragDrop/>}/>
        <Route path="form" element={<Form/>}/>
    </Route>
))


export default router;