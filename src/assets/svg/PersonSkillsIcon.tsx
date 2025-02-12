import {Ref, SVGProps, forwardRef, memo} from 'react'

const PersonSkillsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (

    <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" {...props} ref={ref}>
      <defs>
        <filter id="filter_64_1620_dd" x="0.000000" y="0.000000" width="32.000000" height="32.000000"
                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
        <clipPath id="clip64_1620">
          <rect id="personal-info-icon" width="24.000000" height="24.000000" transform="translate(4.000000 0.000000)"
                fill="white" fillOpacity="0"/>
        </clipPath>
      </defs>
      <g filter="url(#filter_64_1620_dd)">
        <rect id="personal-info-icon" width="24.000000" height="24.000000" transform="translate(4.000000 0.000000)"
              fill="#FFFFFF" fillOpacity="0"/>
        <g clipPath="url(#clip64_1620)">
          <path id="Vector"
                d="M9 20L23 20L23 22L9 22L9 20ZM16 18C13.87 18 11.84 17.15 10.34 15.65C8.84 14.15 8 12.12 8 10C8 7.87 8.84 5.84 10.34 4.34C11.84 2.84 13.87 2 16 2C18.12 2 20.15 2.84 21.65 4.34C23.15 5.84 24 7.87 24 10C24 12.12 23.15 14.15 21.65 15.65C20.15 17.15 18.12 18 16 18Z"
                fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"/>
        </g>
      </g>
    </svg>

)
const ForwardRef = forwardRef(PersonSkillsIcon)
const Memo = memo(ForwardRef)

export default Memo









