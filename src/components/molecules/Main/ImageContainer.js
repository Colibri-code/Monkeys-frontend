import React from 'react';

import { Section } from '../../atoms/main';

const ImageContainer = ({ ImgComponent, ...rest }) => (
  <Section margin='25px 0' {...rest}>
    <ImgComponent />
  </Section>
);

export default ImageContainer;
