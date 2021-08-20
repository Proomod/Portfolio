import * as React from "react"

function WaveTop(props) {
  return (
    <svg
      viewBox="0 0 1920 1080"
      width={1920}
      height={1080}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 825l40-11.8c40-11.9 120-35.5 200-36.7 80-1.2 160 20.2 240 47.2 80 27 160 59.6 240 78.8 80 19.2 160 24.8 240-6.2s160-98.6 240-129.3c80-30.7 160-24.3 240-3.2 80 21.2 160 57.2 240 70.5 80 13.4 160 4 200-.6l40-4.7v252H0z"
        fill="#5a43cb"
      />
    </svg>
  )
}

export default WaveTop;
