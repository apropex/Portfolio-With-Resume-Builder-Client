import { iButton } from "@/types";
import { Button } from "../ui/button";
import { Magnetic } from "../ui/magnetic";

type iProps = React.ComponentProps<"button"> & iButton;

export default function MagneticButton({
  children,
  className,
  variant = "default",
  size = "default",
  type = "button",
  asChild = false,
  ...props
}: iProps) {
  return (
    <Magnetic
      intensity={0.1}
      springOptions={{ bounce: 0.2 }}
      actionArea="global"
      range={200}
    >
      <Button
        asChild={asChild}
        type={type}
        className={className}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </Button>
    </Magnetic>
  );
}

//
