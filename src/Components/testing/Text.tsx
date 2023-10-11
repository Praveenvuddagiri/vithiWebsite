import React from 'react';

type TextProps = {
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  children: React.ReactNode;
  // Add more text-related props as needed
};

const Text: React.FC<TextProps> = ({
  className,
  color,
  fontSize,
  fontWeight,
  textAlign,
  children,
}) => {
  const tailwindClasses = `
    ${color ? `text-${color}` : ''}
    ${fontSize ? `text-${fontSize}` : ''}
    ${fontWeight ? `font-${fontWeight}` : ''}
    ${textAlign ? `text-${textAlign}` : ''}
    ${className || ''}
  `.trim();

  return (
    <span className={tailwindClasses}>
      {children}
    </span>
  );
};

export default Text;
