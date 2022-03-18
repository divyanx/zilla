// code for Footer bar

import './Footer.css';

function Footer() {

    return (
        <div className="main-footer">
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} ZILLA | All rights reserved |
                    Terms Of Service | Privacy
                </p>
            </div>
        </div>

    );
}

export default Footer;
