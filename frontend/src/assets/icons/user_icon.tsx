import * as React from "react"
import { JSX } from "react/jsx-runtime"
const UserIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={50}
    fill="none"
    {...props}
  >
    <rect
      width={51.5}
      height={49.5}
      x={0.25}
      y={0.25}
      fill="#F7FAFB"
      rx={10.75}
    />
    <rect
      width={51.5}
      height={49.5}
      x={0.25}
      y={0.25}
      stroke="#E6E7EB"
      strokeWidth={0.5}
      rx={10.75}
    />
    <path
      fill="#1D4ED8"
      d="m35.388 17.313-7.425-4.288a3.954 3.954 0 0 0-3.938 0l-7.412 4.287c-1.213.7-1.963 2-1.963 3.413v8.55c0 1.4.75 2.7 1.963 3.413l7.425 4.287c1.212.7 2.712.7 3.937 0l7.425-4.288c1.213-.7 1.963-2 1.963-3.412v-8.55a3.99 3.99 0 0 0-1.975-3.413ZM26 19.175c1.613 0 2.913 1.3 2.913 2.912C28.913 23.7 27.613 25 26 25a2.907 2.907 0 0 1-2.912-2.913c0-1.6 1.3-2.912 2.912-2.912Zm3.35 11.65h-6.7c-1.012 0-1.6-1.125-1.037-1.962.85-1.263 2.5-2.113 4.387-2.113 1.888 0 3.538.85 4.388 2.113.562.825-.038 1.962-1.038 1.962Z"
    />
  </svg>
)
export default UserIcon
