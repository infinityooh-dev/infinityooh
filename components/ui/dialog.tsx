// components/ui/dialog.tsx

"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { MdCloseFullscreen } from "react-icons/md";
// import { motion } from 'framer-motion';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-40 bg-black/40 backdrop-blur-xs", className)}
    {...props}
  ></DialogPrimitive.Overlay>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
    position?: "center" | "bottom-left";
    hideOverlay?: boolean;
    isBookingForm?: boolean;
  }
>(
  (
    {
      className,
      children,
      isBookingForm,
      position = "center",
      hideOverlay = false,
    },
    ref
  ) => (
    <DialogPortal>
      {!hideOverlay && <DialogOverlay />}
      {!hideOverlay && (
        <DialogClose
          className={`close-btn fixed top-4 ${isBookingForm && "mix-blend-difference"} pointer-events-auto right-6 z-[1000] text-xl font-bold text-white lg:right-3 lg:mix-blend-normal`}
          asChild={false}
        >
          <div className="close cursor-pointer border-2 p-2 hover:border-white hover:bg-white hover:text-black focus:outline-none">
            <MdCloseFullscreen />
          </div>
          <p className="font-oswald mt-0.5 text-sm uppercase underline">
            close
          </p>
        </DialogClose>
      )}

      <DialogPrimitive.Content
        forceMount
        asChild
        ref={ref}
        className={cn(
          "z-50 transition-all duration-400 ease-out",
          position === "center"
            ? "fixed top-1/2 left-1/2 flex max-h-[90vh] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-hidden md:max-h-[70vh]"
            : "fixed bottom-2 left-2 w-[95vw]",
          className
        )}
        style={{
          transitionProperty: "opacity, transform",
        }}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

// --- Header/Footer/Title/Description unchanged ---

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-xl font-semibold", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
