const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"/>
                </head>
                <body>
                    {this.props.children}
                    <footer>
                        <p>created by Gerimae O.</p>
                    </footer>
                </body>
            </html>
        )
    }
};

module.exports = DefaultLayout;