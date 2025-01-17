import { ColorRing } from "react-loader-spinner";

interface RingProps {
  color: string;
  size: number;
}

function Ring({ color, size }: RingProps) {
  const colors = new Array(5).fill(color) as [
    string,
    string,
    string,
    string,
    string
  ];
  return (
    <ColorRing
      visible={true}
      height={size}
      width={size}
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={colors}
    />
  );
}

export default Ring;
