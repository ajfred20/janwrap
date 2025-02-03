import React from "react";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();

  return (
    <main className="bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="text-center mb-8">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={user?.imageUrl || "https://via.placeholder.com/150"}
                alt="Profile"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-lg font-medium text-neutral-800">
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-neutral-600">
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
