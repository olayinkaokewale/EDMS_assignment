import React, {Component} from 'react';

import { bgColor, textColor } from '../rules/theme';
import { Col, Row, Image, Anchor, Div, Button, Text } from 'atomize/dist';
import Assets from '../assets/assets';
import InputField from '../components/input-field';
import Validator from '../utils/validator';
import Auth from '../io/auth';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailAvailable: null,
            email:'',
        }
    }

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
                    <InputField placeholder="Full Name" {...this.state.validFullname} onBlur={() => {
                        this.validateFullname();
                    }} onFocus={() => {
                        this.setState({validFullname: {}})
                    }} onChange={e => {
                        this.setState({fullname: e.target.value})
                    }} />
                    <InputField placeholder="Email Address" {...this.state.emailAvailable} onBlur={() => {
                        this.validateEmail();
                    }} onFocus={() => {
                        this.setState({emailAvailable: {}})
                    }} onChange={e => {
                        this.setState({email: e.target.value})
                    }} />
                    <InputField placeholder="Job Title" {...this.state.validJob} onBlur={() => {
                        this.validateJob();
                    }} onFocus={() => {
                        this.setState({validJob: {}})
                    }} onChange={e => {
                        this.setState({jobTitle: e.target.value})
                    }} />
                    <InputField placeholder="Password" password {...this.state.validPassword} onBlur={() => {
                        this.validatePassword();
                        this.validateRepeatPassword();
                    }} onFocus={() => {
                        this.setState({validPassword: {}})
                    }} onChange={e => {
                        this.setState({pass: e.target.value})
                    }} />
                    <InputField placeholder="Repeat Password" password {...this.state.validRepeatPassword} onBlur={() => {
                        this.validateRepeatPassword();
                    }} onFocus={() => {
                        this.setState({validRepeatPassword: {}})
                    }} onChange={e => {
                        this.setState({repeat_pass: e.target.value})
                    }} />

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


    validateFullname = () => {
        const { fullname } = this.state;
        if (Validator.isValidFullname(fullname)) {
            this.setState({
                validFullname: {
                    success: true
                }
            })
        } else {
            this.setState({
                validFullname: {
                    errorMsg: "Please enter your full name"
                }
            })
        }
    }

    validateEmail = () => {
        const { email } = this.state;
        if (Validator.isValidEmail(email)) {
            this.setState({emailAvailable: {loading: true}});

            Auth.checkEmail(email)
            .then(res => {
                let emailAvailable = (res.status === 200) ? {success: true} : {errorMsg: res.message};
                this.setState({emailAvailable});
            })
            .catch(err => {
                this.setState({errorMsg: "Unable to verify your email"});
            });
        } else {
            this.setState({
                emailAvailable: {
                    errorMsg: "Invalid email address"
                }
            })
        }
    }

    validateJob = () => {
        const { jobTitle } = this.state;
        if (Validator.isValidInput(jobTitle)) {
            this.setState({
                validJob: {
                    success: true
                }
            })
        } else {
            this.setState({
                validJob: {
                    errorMsg: "Invalid job title"
                }
            })
        }
    }

    validatePassword = () => {
        const { pass } = this.state;
        if (Validator.isValidPass(pass)) {
            this.setState({
                validPassword: {
                    success: true
                }
            })
        } else {
            this.setState({
                validPassword: {
                    errorMsg: "Password must be 6 characters or more"
                }
            })
        }
    }

    validateRepeatPassword = () => {
        const { pass, repeat_pass } = this.state;
        if (repeat_pass === pass && Validator.isValidInput(repeat_pass)) {
            this.setState({
                validRepeatPassword: {
                    success: true
                }
            })
        } else {
            this.setState({
                validRepeatPassword: {
                    errorMsg: "Password does not match"
                }
            })
        }
    }
}