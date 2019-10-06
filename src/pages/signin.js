import React, {Component} from 'react';

import { bgColor, textColor } from '../rules/theme';
import { Col, Row, Image, Div, Button, Text } from 'atomize/dist';
import Assets from '../assets/assets';
import InputField from '../components/input-field';
import Validator from '../utils/validator';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Row d="flex">
                <Col flexDir="column" p="1rem" d="flex" bg="white" minH={{ xs: 'auto', md: '100vh' }} justify="center" align="center">
                    <Div p={{x:"3rem",y:"3rem"}} flexGrow="1">
                        <Text m={{b:"1rem"}} tag="h1" textSize="heading" textColor={textColor.medium}>Welcome back</Text>
                        <Text tag="span" textSize="body" textColor={textColor.medium}>
                            EDMS is an intelligent document management solution that helps you you bring all of your documents into one place—quickly, easily and securely.
                        </Text> 
                    </Div>
                    <Image b={0} flexGrow="1" src={Assets.bg.login} />
                </Col>
                <Col d="flex" bg="blue100" minH={{ xs: 'auto', md: '100vh' }} justify="center" align="center">
                <Div bg="white" m="2rem" p="2rem" w={{md:'70%', xl:'60%', xs:'80%'}}>
                    <Text m={{b:"1rem"}} textSize="body" textColor={textColor.medium} textWeight="600">Log In</Text>
                    <InputField placeholder="Email Address" {...this.state.emailAvailable} onBlur={() => {
                        this.validateEmail();
                    }} onFocus={() => {
                        this.setState({emailAvailable: {}})
                    }} onChange={e => {
                        this.setState({email: e.target.value})
                    }} />
                    <InputField placeholder="Password" password />
                    <Text m={{y:".5rem"}} tag="p" textSize="caption" textColor={textColor.light} textAlign="center">Forgot Password?</Text>
                    
                    <Div d="flex" justify="flex-end">
                        <Button m={{t:"1rem",b:".5rem"}} p={{x:"2rem"}} bg={bgColor.primary} rounded="xs" textSize="body">
                            Login
                        </Button>
                    </Div>
                </Div>
                </Col>
            </Row>
        );
    }

    validateEmail = () => {
        const { email } = this.state;
        if (!Validator.isValidEmail(email)) {
            this.setState({
                emailAvailable: {
                    errorMsg: "Invalid email address"
                }
            })
        }
    }
}