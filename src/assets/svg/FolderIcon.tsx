import {Ref, SVGProps, forwardRef, memo} from 'react'

const FolderIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="14.444336" height="13.000000" viewBox="0 0 14.4443 13" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" {...props} ref={ref}>
      <defs/>
      <path id="Vector"
            d="M14.44 3.61L14.44 12.27C14.44 12.46 14.36 12.65 14.23 12.78C14.09 12.92 13.91 13 13.72 13L0.72 13C0.53 13 0.34 12.92 0.21 12.78C0.07 12.65 0 12.46 0 12.27L0 2.88L13.72 2.88C13.91 2.88 14.09 2.96 14.23 3.1C14.36 3.23 14.44 3.41 14.44 3.61ZM7.52 1.44L0 1.44L0 0.72C0 0.53 0.07 0.34 0.21 0.21C0.34 0.07 0.53 0 0.72 0L6.07 0L7.52 1.44Z"
            fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"/>
    </svg>
)
const ForwardRef = forwardRef(FolderIcon)
const Memo = memo(ForwardRef)

export default Memo









