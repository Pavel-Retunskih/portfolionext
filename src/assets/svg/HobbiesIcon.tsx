import {Ref, SVGProps, forwardRef, memo} from 'react'

const HobbiesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" {...props} ref={ref}>
      <defs>
        <filter id="filter_64_1617_dd" x="0.000000" y="0.000000" width="32.000000" height="32.000000"
                filterUnits="userSpaceOnUse" colorInterpolationFilters={'sRGB'}>
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dx="0" dy="4"/>
          <feGaussianBlur stdDeviation="1.33333"/>
          <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1" result="shape"/>
        </filter>
        <clipPath id="clip64_1617">
          <rect id="hobbies-icon" width="24.000000" height="24.000000" transform="translate(4.000000 0.000000)"
                fill="white" fillOpacity="0"/>
        </clipPath>
      </defs>
      <g filter="url(#filter_64_1617_dd)">
        <rect id="hobbies-icon" width="24.000000" height="24.000000" transform="translate(4.000000 0.000000)"
              fill="#FFFFFF" fillOpacity="0"/>
        <g clipPath="url(#clip64_1617)">
          <path id="Vector"
                d="M21 4C22.59 4 24.11 4.63 25.24 5.75C26.36 6.88 27 8.4 27 10L27 14C27 15.59 26.36 17.11 25.24 18.24C24.11 19.36 22.59 20 21 20L11 20C9.4 20 7.88 19.36 6.75 18.24C5.63 17.11 5 15.59 5 14L5 10C5 8.4 5.63 6.88 6.75 5.75C7.88 4.63 9.4 4 11 4L21 4ZM14 9L12 9L12 11L10 11L10 13L11.99 13L12 15L14 15L13.99 13L16 13L16 11L14 11L14 9ZM22 13L20 13L20 15L22 15L22 13ZM20 9L18 9L18 11L20 11L20 9Z"
                fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"/>
        </g>
      </g>
    </svg>

)
const ForwardRef = forwardRef(HobbiesIcon)
const Memo = memo(ForwardRef)

export default Memo









