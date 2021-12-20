import React from 'react';
import Image from "react-bootstrap/Image";

const Logo = props => {
    const {
        isLight = true,
        ...others
    } = props;

    return isLight
        ? <Image src={"/images/projectImages/ctis-logo-2.png"} {...others} />
        : <Image src={"/images/projectImages/ctis-logo-2.png"} {...others} />;
};

export default Logo;