import {Ref, SVGProps, forwardRef, memo} from "react";

const CheckIcon = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
      <path
          d="M7.88587 11.7006L14.4718 5.11401L15.4856 6.12712L7.88587 13.7268L3.32617 9.16715L4.33928 8.15405L7.88587 11.7006Z"
          fill="white"/>
    </svg>

);

const ForwardRef = forwardRef(CheckIcon);
const Memo = memo(ForwardRef);

export default Memo;