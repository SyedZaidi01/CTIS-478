import React from 'react';
import Widget from '../../Common/Widget';
import Image from "react-bootstrap/Image";

const OurCustomers = () => {
    return (
        <Widget light className="our-customers">
            <Image src={'/images/turkcell-logo.png'}/>
            <Image src={'/images/topaz-az-logo.svg'} style={{backgroundColor: '#ED1C24'}}/>
            <Image src={'/images/enerjisa-logo.png'}/>
            <Image src={'/images/ipragraz-logo.svg'}/>
            <Image src={'/images/turkish-airlines-logo.png'}/>
        </Widget>
    );
};

export default OurCustomers;