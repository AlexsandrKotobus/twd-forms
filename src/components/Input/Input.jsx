import {Field, ErrorMessage as Error} from 'formik';
import './Input.css'

export const Input = ({id, label, name, paceholder}) => {
    return (
        <div className='input-container'>
            <label htmlFor={id}>{label}</label>
            <Field name={name} id={id} paceholder={paceholder}/>
            <Error name={name}>{(error)=><span>{error}</span>}</Error>
        </div>
    );
}


