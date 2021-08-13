import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Metatags = ({ title, description }) => {
    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ description }/>
            {/* You can add as many meta tags as you want in this component */}
        </Helmet>
    )
}

Metatags.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Metatags;
