"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type OrderDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error";
};

export function OrderDialog({ isOpen, onClose, status }: OrderDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader className="space-y-3">
          <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-opacity-20 mb-2">
            {status === "success" ? (
              <div className="rounded-full bg-green-100 p-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div className="rounded-full bg-red-100 p-3">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          <DialogTitle className="text-center text-neutral-800 text-xl">
            {status === "success"
              ? "Order Placed Successfully!"
              : "Order Failed"}
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600">
            {status === "success"
              ? "Thank you for your order. We'll send you a confirmation email with your order details."
              : "There was an error processing your order. Please try again or contact support if the problem persists."}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full bg-[#8B7355] text-white px-8 py-3 rounded-full hover:bg-[#7A6548] transition-colors"
          >
            {status === "success" ? "Continue Shopping" : "Try Again"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
