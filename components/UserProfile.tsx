"use client";

import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

export default function UserProfile() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-4">
        <SignInButton mode="modal">
          <span className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors">
            Login
          </span>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="bg-[#8B7355] text-white px-4 py-2 rounded-full text-sm hover:bg-[#7A6548] transition-colors">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    );
  }

  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-8 h-8",
        },
      }}
    />
  );
}
