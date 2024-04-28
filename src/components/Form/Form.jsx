import React from 'react';
import { Formik, Form } from 'formik';
import { initialValues, schemas } from './helper';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './Form.css';

const CustomForm = () => {
    return <Formik 
    initialValues={initialValues}
    validationSchema={schemas.custom}
    onSubmit={()=> console.log('Success')}
    
    >
        <Form className='form'>
            <Input label='Имя'
                name='firstName'
                id='firstName'
                paceholder='Введите имя'
            />
            <Input label='Фамилия'
                name='lastName'
                id='lastName'
                paceholder='Введите фамилию'
            />
            <Input label='Email'
                name='email'
                id='email'
                paceholder='Введите email'
            />

<Button>Отправить</Button>
        </Form>
    </Formik>
}

export default CustomForm;
