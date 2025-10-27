interface iProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function Logo({ width = "78", height = "32", className }: iProps) {
  return (
    <svg
      id="logo-38"
      width={width}
      height={height}
      viewBox="0 0 78 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="ccustom" fill="#13B218" />
      <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className="ccompli1" fill="#3FC042" />
      <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#72D175" />
    </svg>
  );
}
