import React from "react";

function SvgFun(props: any) {
  return (
    <svg width={180} height={180} viewBox="0 0 52.917 52.917" {...props}>
      <path fill="none" d="M0 0h52.917v52.917H0z" />
      <g
        transform="matrix(.99244 0 0 .99244 112.454 -240.106)"
        fillRule="evenodd"
      >
        <path
          d="M-65.84 265.038c5.027 3.882-11.502 12.341-11.567 16.318-.143 8.817 3.222 10.529-8.939 10.266-12.16-.262-8.372-.706-9.377-9.361-.783-6.75-16.634-13.285-11.762-17.277 4.872-3.993 11.604 10.729 20.607 10.96 9.002.231 16.01-14.788 21.037-10.906z"
          fill="#113065"
        />
        <circle cx={-86.58} cy={266.574} r={7.205} fill="#113065" />
        <circle cx={-103.265} cy={256.58} r={3.87} fill="#f5cf68" />
        <circle cx={-86.28} cy={249.416} r={3.87} fill="#f5cf68" />
        <circle cx={-70.609} cy={256.825} r={3.87} fill="#f5cf68" />
      </g>
    </svg>
  );
}

export default SvgFun;
