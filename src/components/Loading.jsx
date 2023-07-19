export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        style={{margin: 'auto', background: 'none', display: 'block',}}
        width="200px"
        height="200px"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#471aa0"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}
