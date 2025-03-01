import {NavigationMenu} from 'radix-ui'
import {forwardRef, ReactNode} from "react";
import {NavigationMenuItemProps, NavigationMenuListProps, NavigationMenuProps} from "@radix-ui/react-navigation-menu";
import {usePathname} from "next/navigation";
import Link, {LinkProps} from "next/link";


export const NavMenuRoot = forwardRef<HTMLElement, NavigationMenuProps>(({children, ...props}, ref) => {
  return <NavigationMenu.Root{...props} ref={ref}>{children}</NavigationMenu.Root>
})
NavMenuRoot.displayName = 'NavMenuRoot'


export const List = forwardRef<HTMLUListElement, NavigationMenuListProps>(({children, ...props}, ref) => {
  return <NavigationMenu.List ref={ref} {...props}>{children}</NavigationMenu.List>
})

List.displayName = 'List'

export const ListItem = forwardRef<HTMLLIElement, NavigationMenuItemProps>(({children, ...props}, ref) => {
  return <NavigationMenu.Item{...props} ref={ref}>{children}</NavigationMenu.Item>
})
ListItem.displayName = 'ListItem'


type LinkItemProps = LinkProps & { children: ReactNode, color?: string }

export const LinkItem = forwardRef<HTMLAnchorElement, LinkItemProps>(({href, children, color, ...props}, ref) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
      <NavigationMenu.Link asChild>
        <Link href={href} {...props} className={`${isActive ? `${color}` : ''} hover:opacity-80`}
              ref={ref}>{children}</Link>
      </NavigationMenu.Link>
  );
})
LinkItem.displayName = 'LinkItem'