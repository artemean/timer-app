import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Clock from './Clock';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Clock />, div);
});

test('should render clock', () => {
    const clock = mount(<Clock totalSeconds={62} />);
    expect( clock.text() ).toBe('01:02');
});

test('should format seconds', () => {
    const clock = shallow(<Clock />).instance();
    expect( clock.formatSeconds(615) ).toBe('10:15');
});

test('should format seconds while min/sec is less than 10', () => {
    const clock = shallow(<Clock />).instance();
    expect( clock.formatSeconds(61) ).toBe('01:01');
});