import styles from './picture.module.css'
function ImageBlob(props) {
  return (
    <svg
      className={styles.profilePic}
      width={500}
      height={600}
      viewBox="0 0 559 636"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M306.768 1.44c60.144 12.858 69.2 99.356 115.524 139.812 34.563 30.185 93.65 26.424 118.784 64.816 25.23 38.536 17.645 89.538 12.214 135.277-5.009 42.184-30.123 77.216-42.278 117.92-16.375 54.834 4.81 130.251-41.762 163.506-45.105 32.208-108.907-3.469-162.482-17.666-43.361-11.49-81.787-32.515-119.361-57.019-35.847-23.377-68.592-49.338-95.167-82.883-29.817-37.637-56.031-77.52-68.62-123.858-15.14-55.733-38.112-118.842-11.195-169.939 26.86-50.989 96.378-57.685 146.286-86.504C208.623 56.08 250.406-10.61 306.768 1.44z"
        fill="#B0B6AF"
      />
  
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M306.768 1.44c60.144 12.858 69.2 99.356 115.524 139.812 34.563 30.185 93.65 26.424 118.784 64.816 25.23 38.536 17.645 89.538 12.214 135.277-5.009 42.184-30.123 77.216-42.278 117.92-16.375 54.834 4.81 130.251-41.762 163.506-45.105 32.208-108.907-3.469-162.482-17.666-43.361-11.49-81.787-32.515-119.361-57.019-35.847-23.377-68.592-49.338-95.167-82.883-29.817-37.637-56.031-77.52-68.62-123.858-15.14-55.733-38.112-118.842-11.195-169.939 26.86-50.989 96.378-57.685 146.286-86.504C208.623 56.08 250.406-10.61 306.768 1.44z"
        fill="url(#prefix__pattern0)"
      />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={5}
          height={5}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.00186 0 0 .00163 0 .011)"
          />
        </pattern>
        <image
          id="prefix__image0"
          width={640}
          height={640}
          href='./profile.png'
        />
      </defs>
     </svg>
  //   <svg
  //   viewBox="0 0 559 636"
  //   width={559}
  //   className={styles.profilePic}
  //   height={636}
  //   xmlns="http://www.w3.org/2000/svg"
  //   {...props}
  // >
  //   <path
  //     d="M518.778 150.8c36.6 28 80.4 68.1 77.1 103.4-3.4 35.2-53.8 65.7-102.2 82-48.4 16.3-94.8 18.4-126.7-.5-31.8-18.9-49-58.9-57.6-99.8-8.6-40.9-8.6-82.9 11.9-107.3 20.5-24.3 61.4-31 96.5-26.4 35.1 4.7 64.4 20.6 101 48.6"
  //     fill="#CCC"
  //   />
  // </svg>
  );
}

export default ImageBlob;
