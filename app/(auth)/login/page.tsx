import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="min-w-sm flex flex-col gap-12 bg-black p-8 rounded-lg">
        <h1 className="text-white font-bold font-geist self-center text-3xl">
          Login
        </h1>
        <div className="flex flex-col gap-6">
          <Label htmlFor="userName">User Name</Label>
          <Input placeholder="user name" />
          <Label htmlFor="password">Password</Label>
          <Input placeholder="password" />
          <Button className="hover:bg-accent">Login</Button>
        </div>
        <p className="text-secondary-text font-inter text-[12px] self-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-700 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
