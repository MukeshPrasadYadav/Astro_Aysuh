


interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
     <button className="
        mt-6
        rounded-xl
        bg-primary
        px-6 py-3
        font-semibold
        text-white
        shadow-primary
        cursor-pointer
      ">
        Get Started
      </button>
  );
}