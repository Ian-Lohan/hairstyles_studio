import React from 'react';

interface ImageProps {
  source: string,
  alt?: string,
  className?: string
}

const Image: React.FC<ImageProps> = ({source, alt, className}) => {
  return (
    <img src={source} alt={alt} className={className}/>
  )
}

export default Image;