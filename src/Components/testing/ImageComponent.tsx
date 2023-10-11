import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  objectFit,
}) => {
  const tailwindClasses = `
    ${width ? `w-${width}` : ''}
    ${height ? `h-${height}` : ''}
    ${objectFit ? `object-${objectFit}` : ''}
    ${className || ''}
  `.trim();

  return (
    <img
      src={src}
      alt={alt}
      className={tailwindClasses}
    />
  );
};

export default Image;
