import {Ref, SVGProps, forwardRef, memo} from "react";

const ArrowIcon = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        width="7.778076"
        height="12.728027"
        viewBox="0 0 7.77808 12.728"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
    >
      <path
          d="M4.94 6.36L0 1.41L1.41 0L7.77 6.36L1.41 12.72L0 11.31L4.94 6.36Z"
          fill="currentColor"
      />
    </svg>
);

const ForwardRef = forwardRef(ArrowIcon);
const Memo = memo(ForwardRef);

export default Memo;