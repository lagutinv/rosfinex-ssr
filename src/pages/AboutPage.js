import React from 'react';
import Metatags from '../components/Metatags';

const AboutPage = () => {
    return (
        <section>
            <Metatags
                title="This is the About Page"
                description="About page's description here" />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">This is the About Page</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed harum voluptatibus aperiam nam, sunt ipsa natus totam, minus cupiditate reiciendis tempora autem ad eius error magnam voluptates quas commodi!</p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;
