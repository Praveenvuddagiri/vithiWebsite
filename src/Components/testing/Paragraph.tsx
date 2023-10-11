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
type Alignment = "left" | "right" | "center" | "justify";

const Paragraph = ({
  para,
  textColor,
  textSize,
  textAlign,
}: {
  para: string;
  textColor: Color;
  textSize: TextSize;
  textAlign: Alignment;
}) => {
  return (
    <div
      className={`text-${textSize} text-${textColor} mb-6 text-${textAlign}`}
    >
      <p>{para}</p>
    </div>
  );
};

export default Paragraph;
