import React, { ReactNode } from "react";

const GreyDisplay = ({ children }: { children: ReactNode[] | ReactNode }) => {
  return <div className="bg-gray-100 m-4 p-4 rounded-lg">{children}</div>;
};

export default GreyDisplay;
