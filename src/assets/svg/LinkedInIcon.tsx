import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgArrowBackOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        className={props.className}
        height={24}
        ref={ref}
        width={24}
        xmlns={'http://www.w3.org/2000/svg'}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

      <g id="SVGRepo_iconCarrier">

        <path fillRule="evenodd" clipRule="evenodd"
              d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"
              fill="currentColor"/>

      </g>
    </svg>
)
const ForwardRef = forwardRef(SvgArrowBackOutline)
const Memo = memo(ForwardRef)

export default Memo









