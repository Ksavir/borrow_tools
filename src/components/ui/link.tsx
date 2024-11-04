import { cn } from '@/lib/utils';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.ComponentProps<typeof RouterLink> {
  children: React.ReactNode;
  className?: string;
  href: string;
  legacyBehavior?: boolean;
  passHref?: boolean;
}

export function Link({
  children,
  className,
  href,
  legacyBehavior,
  passHref,
  ...props
}: LinkProps) {
  if (legacyBehavior) {
    return (
      <RouterLink to={href} className={cn(className)} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <RouterLink to={href} className={cn(className)} {...props}>
      {children}
    </RouterLink>
  );
}