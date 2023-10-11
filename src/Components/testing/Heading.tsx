import React from "react";

type TextSize =
  | "sm"
  | "md"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

type Color = "primary" | "secondary" | "light";

const Heading = ({
  heading,
  textSize = '2xl',
  fontWeight = '700px',
  textColor = 'primary',
  lineHeight = '38px',
}: {
  heading: string;
  textSize?: TextSize;
  fontWeight?: string;
  textColor?: Color;
  lineHeight?: string;
}) => {
  return (
    <h2 className= {`text-${textSize} font-[${fontWeight}] text-${textColor} leading-${lineHeight} mb-4`}>
      {heading}
    </h2>
  );
};

export default Heading;
