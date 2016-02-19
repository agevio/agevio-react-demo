import React from 'react';
import t from 'agevio.js';

import Lang from './lang';

export default React.createClass({
    componentDidMount() {
        t.on('localeChanged', this.forceComponentRerender);
    },

    componentWillUnmount() {
        t.remove('localeChanged', this.forceComponentRerender);
    },

    forceComponentRerender() {
        this.setState({rerender: Math.random()});
    },

    render() {
        return (
          <div>
            <p><pre>{"translate('hello.world', 'Hello World!')"}</pre> => {t('hello.world', 'Hello World!')}</p>
            <p><pre>{"translate('format.array.simple', 'Hello #{0}!', ['buddy'])"}</pre> => {t('format.array.simple', 'Hello #{0}!', ['buddy'])}</p>
            <p><pre>{"translate('format.object.simple', 'Hello #{name}!', {name: 'esse'})"}</pre> => {t('format.object.simple', 'Hello #{name}!', {name: 'esse'})}</p>
            <Lang locale={t.getLocale()} />
          </div>
        );
    }
});
