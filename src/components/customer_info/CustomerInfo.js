import React from 'react'
import { Formik, Form, Field } from 'formik';
import FormField from '../../constant/FormField'
import * as Yup from "yup";
import "yup-phone";
import styled from 'styled-components'
import StyledButton from '../../constant/StyledButton'

const CustomerInfo = () => {
    return (
        <div>
            <Formik
                initialValues={{ name: '', lastName: '', email: '', phone: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validationSchema={ValidationSchema}
            >
                {props => (
                    <StyledForm>
                        <FormField
                            name='name'
                            label='First Name'
                            placeholder='Name' />
                        <FormField
                            name='lastname'
                            label='Last Name'
                            placeholder='Last Name' />
                        <FormField
                            name='email'
                            type='email'
                            label='Email Address'
                            placeholder='Email address' />
                        <FormField
                            name='phone'
                            type='phone'
                            label='Phone Number'
                            placeholder='Phone Number' />
                        <StyledButton type="submit" name='Book Reservation' class='lg' />
                    </StyledForm>
                )}
            </Formik>
        </div>
    )
}

export default CustomerInfo

const phoneSchema = Yup.string()
    .phone('Please enter a valid number')
    .required('Required')

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    lastname: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Wrong email format')
        .required('Required'),
    phone: phoneSchema
})

const StyledForm = styled(Form)`
    display:flex;
    flex-direction:column;
    width:50%;
    justify-content:center;
    align-items:center;
`