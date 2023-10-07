export function ShadcnUILogo(props: any) {
  return (
    <div className="flex items-center space-x-2 w-fit h-6 cursor-default">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="h-6 w-6"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="#9BA2A7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="#9BA2A7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
      <span {...props}>shadcn/ui</span>
    </div>
  )
}
