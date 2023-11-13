"use client";

import { cn } from "@/src/lib/utils";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import {
    ComponentPropsWithoutRef,
    ElementRef,
    forwardRef,
    HTMLAttributes,
} from "react";
import { Icons } from "../icons/icons";

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = forwardRef<
    ElementRef<typeof MenubarPrimitive.Root>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Root
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
    />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = forwardRef<
    ElementRef<typeof MenubarPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-xs font-medium outline-none focus:bg-accent focus:text-text data-[state=open]:bg-accent data-[state=open]:text-accent",
            className
        )}
        {...props}
    />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = forwardRef<
    ElementRef<typeof MenubarPrimitive.SubTrigger>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent data-[state=open]:bg-accent data-[state=open]:text-accent",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        {children}
        <Icons.chevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = forwardRef<
    ElementRef<typeof MenubarPrimitive.SubContent>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.SubContent
        ref={ref}
        className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white/20 p-1 text-text",
            className
        )}
        {...props}
    />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = forwardRef<
    ElementRef<typeof MenubarPrimitive.Content>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
    (
        {
            className,
            align = "start",
            alignOffset = -4,
            sideOffset = 8,
            ...props
        },
        ref
    ) => (
        <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content
                ref={ref}
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(
                    "data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border bg-white/20 p-1 text-text shadow-md backdrop-blur-sm",
                    className
                )}
                {...props}
            />
        </MenubarPrimitive.Portal>
    )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = forwardRef<
    ElementRef<typeof MenubarPrimitive.Item>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-xs outline-none focus:bg-white/10 focus:text-accent focus:backdrop-blur-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = forwardRef<
    ElementRef<typeof MenubarPrimitive.CheckboxItem>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Icons.check className="h-4 w-4" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = forwardRef<
    ElementRef<typeof MenubarPrimitive.RadioItem>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Icons.circle className="h-2 w-2 fill-current" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = forwardRef<
    ElementRef<typeof MenubarPrimitive.Label>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label
        ref={ref}
        className={cn(
            "px-2 py-1.5 text-sm font-semibold",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = forwardRef<
    ElementRef<typeof MenubarPrimitive.Separator>,
    ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-black/30", className)}
        {...props}
    />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
    className,
    ...props
}: HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-white/20",
                className
            )}
            {...props}
        />
    );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut,
};
