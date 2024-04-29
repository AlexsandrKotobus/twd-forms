import { Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';

export const Layout = () => {
    return(
            <div>
            <header>
                <CustomLink to='/'>Home</CustomLink> 
                <CustomLink to='/dragdrop'>Drag & Drop</CustomLink>
                <CustomLink to='/form'>Form</CustomLink>
               
            </header>           
            <main>
                <div className='container'>
                    <Outlet/>   
                </div>
                
            </main>
            <footer>
                c апреля 2024
            </footer>
        </div>
    )
}