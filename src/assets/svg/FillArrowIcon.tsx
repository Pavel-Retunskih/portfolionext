import {Ref, SVGProps, forwardRef, memo} from "react";

const FillArrowIcon = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg width="8.500000" height="6.000000" viewBox="0 0 8.5 6" fill="none" {...props} ref={ref}>
      <defs/>
      <path id="Vector" d="M4.25 0L8.5 6L0 6L4.25 0Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
    </svg>
);

const ForwardRef = forwardRef(FillArrowIcon);
const Memo = memo(ForwardRef);

export default Memo;