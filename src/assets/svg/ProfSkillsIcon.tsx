import {Ref, SVGProps, forwardRef, memo} from 'react'

const ProfSkillsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (

    <svg width="20.000000" height="18.000000" viewBox="0 0 20 18" fill="none"
         xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs/>
      <path id="Vector"
            d="M1 0L19 0C19.26 0 19.51 0.1 19.7 0.29C19.89 0.48 20 0.73 20 1L20 17C20 17.26 19.89 17.51 19.7 17.7C19.51 17.89 19.26 18 19 18L1 18C0.73 18 0.48 17.89 0.29 17.7C0.1 17.51 0 17.26 0 17L0 1C0 0.73 0.1 0.48 0.29 0.29C0.48 0.1 0.73 0 1 0ZM10 12L10 14L16 14L16 12L10 12ZM6.41 9L3.58 11.82L5 13.24L9.24 9L5 4.75L3.58 6.17L6.41 9Z"
            fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"/>
    </svg>
)
const ForwardRef = forwardRef(ProfSkillsIcon)
const Memo = memo(ForwardRef)

export default Memo









