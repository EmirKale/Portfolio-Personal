export default function ArrowIcon({ 
  className = "", 
  variant = "light" 
}: { 
  className?: string;
  variant?: "light" | "dark" | "transparent";
}) {
  const bgClass = variant === "light" ? "bg-cream text-bg" : variant === "dark" ? "bg-bg text-cream" : "bg-transparent text-current";
  
  return (
    <div className={`flex items-center justify-center w-6 h-6 rounded-full ${bgClass} ${className} transition-transform duration-300 group-hover:rotate-45`}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: 'rotate(-45deg)' }}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  );
}
