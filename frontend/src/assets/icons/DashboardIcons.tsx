import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const DashboardIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    className="min-w-max"
    {...props}
  >
    <path
      fill={props.color || "#000"}     
      d="M14.667 5.68V2.653c0-.94-.427-1.32-1.487-1.32h-2.693c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693c1.06.007 1.487-.373 1.487-1.313ZM14.667 13.18v-2.693C14.667 9.427 14.24 9 13.18 9h-2.693C9.427 9 9 9.427 9 10.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693c1.06 0 1.487-.427 1.487-1.487ZM7 5.68V2.653c0-.94-.427-1.32-1.487-1.32H2.82c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693C6.573 7 7 6.62 7 5.68ZM7 13.18v-2.693C7 9.427 6.573 9 5.513 9H2.82c-1.06 0-1.487.427-1.487 1.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693C6.573 14.667 7 14.24 7 13.18Z"
    />
  </svg>
)
export default DashboardIcon
