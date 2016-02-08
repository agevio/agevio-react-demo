import React from 'react';
import Lang from './lang';

export default React.createClass({
    componentDidMount() {
        translate.on('localeChanged', this.forceComponentRerender);
    },

    componentWillUnmount() {
        translate.remove('localeChanged', this.forceComponentRerender);
    },

    forceComponentRerender() {
        this.setState({rerender: Math.random()});
    },

    render() {
        return (
          <div>
            <p><pre>{"translate('hello.world', 'Hello World!')"}</pre> => {translate('hello.world', 'Hello World!')}</p>
            <p><pre>{"translate('format.array.simple', 'Hello #{0}!', ['buddy'])"}</pre> => {translate('format.array.simple', 'Hello #{0}!', ['buddy'])}</p>
            <p><pre>{"translate('format.object.simple', 'Hello #{name}!', {name: 'esse'})"}</pre> => {translate('format.object.simple', 'Hello #{name}!', {name: 'esse'})}</p>
            <Lang />
          </div>
        );
    }
});
