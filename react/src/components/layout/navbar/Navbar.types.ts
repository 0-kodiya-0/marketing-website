import type  {ReactNode} from "react"

export interface NavbarProps {
    children?: ReactNode;
}

export interface NavbarBrandProps {
    logo?: string;
    title: string;
}

export interface NavbarLinksProps {
    children: ReactNode;
}

export interface NavbarActionsProps {
    children: ReactNode;
}