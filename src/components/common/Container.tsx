import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-6">{children}</div>;
};

export default Container;
