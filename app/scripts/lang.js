import React from 'react';

export default React.createClass({
    handleChange(e) {
        translate.setLocale(e.target.value);
    },

    render() {
        const options = translate.getLanguages().map((lang) => {
            const locale = translate.getLocale(lang);

            return <option value={locale} key={locale}>{lang}</option>;
        });

        return (
          <p>
            <span>Switch language:</span>
            <select defaultValue={translate.getLocale()} onChange={this.handleChange}>
              {options}
            </select>
          </p>
        );
    }
});
