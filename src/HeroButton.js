import React from 'react';

const HeroButton = ({primary,text}) => (
     <a href="#" className="Button" data-primary={primary}>{text}</a>
)

export default HeroButton;