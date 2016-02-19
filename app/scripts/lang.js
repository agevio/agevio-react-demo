import React from 'react';
import t from 'agevio.js';

export default React.createClass({
    handleChange(e) {
        t.setLocale(e.target.value);
    },

    render() {
        const options = t.getLanguages().map((lang) => {
            const locale = t.getLocale(lang);

            return <option value={locale} key={locale}>{lang}</option>;
        });

        return (
          <p>
            <span>Switch language:</span>
            <select defaultValue={this.props.locale} value={this.props.locale} onChange={this.handleChange}>
              {options}
            </select>
          </p>
        );
    }
});
