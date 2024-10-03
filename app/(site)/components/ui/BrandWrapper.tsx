import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";
import React from "react";

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  textColor: "white" | "black";
  backgroundColor?: "light" | "dark";
  gradientColor?: "blue" | "pink";
  gradientDirection?: "top" | "right" | "bottom" | "left";
};

type Props = {
  children: React.ReactNode;
};

const BrandWrapper = ({
  className,
  children,
  ...props
}: Props & WrapperProps) => {
  const { textColor, backgroundColor, gradientColor, gradientDirection } =
    props;

  const propVariants = cva(`w-full h-full text-black font-bold bg-white `, {
    variants: {
      textColor: {
        white: "text-white",
        black: "text-black",
      },
      backgroundColor: {
        light: "bg-white",
        dark: "bg-black",
      },
      gradientColor: {
        blue: "from-cyan-300 via-white to-cyan-300",
        pink: "from-pink-300 via-white to-pink-300",
      },
      gradientDirection: {
        top: "bg-gradient-to-t",
        right: "bg-gradient-to-r",
        bottom: "bg-gradient-to-b",
        left: "bg-gradient-to-l",
        bottomRight: "bg-gradient-to-br",
      },
    },
  });

  return (
    <div
      className={`${cn(propVariants({ textColor, backgroundColor, gradientColor, gradientDirection }), className)} flex items-center`}
    >
      <div className=" w-1/2 ml-8 text-7xl leading-snug">{children}</div>
    </div>
  );
};

export default BrandWrapper;
