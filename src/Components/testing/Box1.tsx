import React from 'react';

type BoxProps = {
  className?: string;
  backgroundColor?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  textAlign?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  overflowX?: string;
  overflowY?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  children: React.ReactNode;
};

const Box1: React.FC<BoxProps> = ({
  className,
  backgroundColor,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  textAlign,
  padding,
  margin,
  borderRadius,
  overflowX,
  overflowY,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  children,
}) => {
  const tailwindClasses = `
    ${backgroundColor ? `bg-${backgroundColor}` : ''}
    ${width ? `w-${width}` : ''}
    ${minWidth ? `min-w-${minWidth}` : ''}
    ${maxWidth ? `max-w-${maxWidth}` : ''}
    ${height ? `h-${height}` : ''}
    ${minHeight ? `min-h-${minHeight}` : ''}
    ${maxHeight ? `max-h-${maxHeight}` : ''}
    ${textAlign ? `text-${textAlign}` : ''}
    ${padding ? `p-${padding}` : ''}
    ${margin ? `m-${margin}` : ''}
    ${borderRadius ? `rounded-${borderRadius}` : ''}
    ${overflowX ? `overflow-x-${overflowX}` : ''}
    ${overflowY ? `overflow-y-${overflowY}` : ''}
    ${position ? `absolute ${position}` : ''}
    ${top ? `top-${top}` : ''}
    ${left ? `left-${left}` : ''}
    ${right ? `right-${right}` : ''}
    ${bottom ? `bottom-${bottom}` : ''}
    ${zIndex ? `z-${zIndex}` : ''}
    ${className || ''}
  `.trim();

  return (
    <div className={tailwindClasses}>
      {children}
      <h1>{tailwindClasses}</h1>
    </div>
  );
};

export default Box1;