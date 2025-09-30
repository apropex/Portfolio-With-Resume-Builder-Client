import { Button } from "../ui/button";
import { Magnetic } from "../ui/magnetic";

interface iProps extends React.ComponentProps<"button"> {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function MagneticButton({
  children,
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: iProps) {
  return (
    <Button type={type} {...props} className={className} variant={variant} size={size}>
      <Magnetic
        intensity={0.1}
        springOptions={{ bounce: 0.2 }}
        actionArea="global"
        range={200}
      >
        {children}
      </Magnetic>
    </Button>
  );
}
