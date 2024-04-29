import {Link, useMatch} from 'react-router-dom'

    
    const CustomLink = ({children, to, ...props}) => {
const match = useMatch({
    path: to,
   
    // end: false, 
    end: to.length ===1,  //для главной страницу берем вест путь в противном случае - частичный
})
console.log('match ',match);

    return (
        <Link to={to}
        
        style={{
            color: match ? 'var(--color-active)' : "white"
        }}
        {...props}
        >
            {children}
        </Link>
    );
}

export default CustomLink;