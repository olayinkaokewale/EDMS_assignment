import React, {Component} from 'react';

import { bgColor, textColor } from '../rules/theme';
import { Col, Row, Image, Anchor, Div, Button, Text } from 'atomize/dist';
import Assets from '../assets/assets';
import InputField from '../components/input-field';

export default class SignUp extends Component {


    render() {
        return (
            <Row d="flex">
                <Col p="1rem" d="flex" bg="white" h={{ xs: 'auto', md: '100vh' }} justify="center" align="center">
                <Div p={{x:"3rem"}}>
                    <Text m={{b:"1rem"}} tag="h1" textSize="heading" textColor={textColor.medium}>Join your Workspace</Text>
                    <Text tag="span" textSize="body" textColor={textColor.medium}>
                    EDMS is an intelligent document management solution that helps you you bring all of your documents into one place—quickly, easily and securely.
                    </Text>
                    <Image m={{t:"2rem"}} src={Assets.bg.registration} />
                </Div>
                </Col>
                <Col d="flex" bg="blue100" minH={{ xs: 'auto', md: '100vh' }} justify="center" align="center">
                <Div bg="white" m="2rem" p="2rem" w={{md:'70%', xl:'60%', xs:'80%'}}>
                    <Text m={{b:"1rem"}} textSize="body" textColor={textColor.medium} textWeight="600">Sign Up</Text>
                    <InputField placeholder="Full Name" />
                    <InputField placeholder="Email Address" />
                    <InputField placeholder="Job Title" />
                    <InputField placeholder="Password" password />
                    <InputField placeholder="Repeat Password" password />

                    <Text m={{y:".5rem"}} tag="p" textSize="caption" textColor={textColor.light}>Passwords must be at least 6 Characters long,.</Text>
                    <Text m={{y:".5rem"}} tag="p" textSize="caption" textColor={textColor.light}>Already have an account? <Anchor href="/signin" m={{l:"1rem"}}>Log In</Anchor></Text>

                    <Button m={{t:"2.5rem",b:".5rem"}} w="100%" bg={bgColor.primary} rounded="xs" textSize="body">
                    Join Workspace
                    </Button>
                </Div>
                </Col>
            </Row>
        );
    }
}