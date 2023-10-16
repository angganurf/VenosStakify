import React from "react";
import Image from "next/image";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <Image width={24} height={24} src={`https://assets.pancakeswap.finance/web/chains/5611.png`} unoptimized />;
};

export default Icon;
