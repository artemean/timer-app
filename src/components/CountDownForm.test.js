import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CountDownForm from './CountDownForm';

describe('CountDownForm', () => {
    test('Exists', () => {
        const wrapper = shallow(<CountDownForm />);
        expect(wrapper.exists());
    });
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountDownForm />, div);
    });
});