import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';


const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Covid Situation</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Enter your information appropriately, a doctor will call you.</FormH1>
                            <FormLabel htmlFor='for'>Full Name</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Address</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor='for'>Telephone Number</FormLabel>
                            <FormInput type='number' required />
                            <FormButton type='submit'>Continue</FormButton>
                            {/* <Text>Forgot password?</Text> */}
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
