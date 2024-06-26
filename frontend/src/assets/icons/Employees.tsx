import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const Employees = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    className="min-w-max"
    {...props}
  >
    <mask
      id="a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill={props.color || "#000"}
        d="M0 12v-1.05c0-.478.244-.867.733-1.167.49-.3 1.134-.45 1.934-.45.144 0 .283.003.416.009.134.005.261.02.384.041A2.732 2.732 0 0 0 3 10.916V12H0Zm4 0v-1.083c0-.356.097-.68.292-.975.194-.295.47-.553.825-.775.355-.223.78-.39 1.275-.5A7.331 7.331 0 0 1 8 8.5c.589 0 1.13.056 1.625.167.494.11.92.277 1.275.5.356.222.628.48.817.775.189.294.283.62.283.975V12H4Zm9 0v-1.083c0-.29-.036-.561-.108-.817a2.614 2.614 0 0 0-.325-.717c.122-.022.247-.036.375-.041.127-.006.258-.009.391-.009.8 0 1.445.148 1.934.442.489.294.733.686.733 1.175V12h-3Zm-7.583-1.333H10.6c-.111-.223-.42-.417-.925-.584A5.327 5.327 0 0 0 8 9.833c-.611 0-1.17.084-1.675.25-.506.167-.808.361-.908.584Zm-2.75-2c-.367 0-.68-.13-.942-.392a1.284 1.284 0 0 1-.392-.942c0-.377.13-.694.392-.95C1.986 6.128 2.3 6 2.667 6c.377 0 .694.128.95.383.255.256.383.573.383.95 0 .367-.128.68-.383.942a1.276 1.276 0 0 1-.95.392Zm10.666 0c-.366 0-.68-.13-.941-.392A1.284 1.284 0 0 1 12 7.333c0-.377.13-.694.392-.95.26-.255.575-.383.941-.383.378 0 .695.128.95.383.256.256.384.573.384.95 0 .367-.128.68-.384.942a1.276 1.276 0 0 1-.95.392ZM8 8a1.929 1.929 0 0 1-1.417-.583A1.929 1.929 0 0 1 6 6c0-.567.194-1.042.583-1.425A1.943 1.943 0 0 1 8 4c.567 0 1.042.192 1.425.575.383.383.575.858.575 1.425 0 .556-.192 1.028-.575 1.417C9.042 7.806 8.567 8 8 8Zm0-1.333a.645.645 0 0 0 .475-.192A.645.645 0 0 0 8.667 6a.645.645 0 0 0-.192-.475A.645.645 0 0 0 8 5.333a.645.645 0 0 0-.475.192.645.645 0 0 0-.192.475c0 .189.064.347.192.475A.645.645 0 0 0 8 6.667Z"
      />
    </g>
  </svg>
)
export default Employees
