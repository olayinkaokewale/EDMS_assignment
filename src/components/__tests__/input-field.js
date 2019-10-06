import React from 'react';
import ReactDOM from 'react-dom';
import InputField from '../input-field';

it('expects InputField to render without crashing', () => {
    const testArea = document.createElement("div");
    ReactDOM.render(<InputField />, testArea);
    ReactDOM.unmountComponentAtNode(testArea);
})