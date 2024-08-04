import ISvgParams from "./type-svg";


export default function SvgArrowLeft({ customSass }: ISvgParams) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      className={customSass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.23633 17.3813H27.0697"
        stroke="#FF8310"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6389 25.7484L6.23608 17.3817L14.6389 9.01367"
        stroke="#FF8310"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
