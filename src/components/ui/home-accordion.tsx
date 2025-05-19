"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const HomeAccordion = AccordionPrimitive.Root;

const HomeAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  console.log(props)
  
  return (

  <AccordionPrimitive.Item
  
    ref={ref}
    className={cn("bg-white text-black w-full h-full", className)}
    {...props}
  />
)});
HomeAccordionItem.displayName = "AccordionItem";

const HomeAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 justify-between py-3 px-3 md:py-7 md:px-7 font-medium transition-all [&[data-state=open]>svg]:rotate-180 text-start text-lg items-center",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-8 w-8 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
HomeAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const HomeAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden  text-lg transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 px-7", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

HomeAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  HomeAccordion,
  HomeAccordionItem,
  HomeAccordionTrigger,
  HomeAccordionContent,
};
