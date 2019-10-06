import React from 'react';
import { Div, Anchor,Text } from 'atomize/dist';

const Home = (props) => {
    return (
        <Div align="center" justify="center">
            <Text tag="h1" display="display2" textWeight="600">Welcome Home. <Anchor href="/signup" m={{l:"1rem"}}>Sign Up</Anchor> <Anchor href="/signin" m={{l:"1rem"}}>Log In</Anchor></Text> 
        </Div>
    )
}

export default Home;