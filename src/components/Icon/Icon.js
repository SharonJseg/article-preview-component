import React from 'react';
import './Icon.css';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Pinterest from './Pinterest';

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case 'facebook':
      return <Facebook {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'pinterest':
      return <Pinterest {...props} />;
  }
};

export default Icon;
