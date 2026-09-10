import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="min-w-md flex flex-col gap-12 bg-black p-8 rounded-lg">
        <h1 className="text-white font-bold font-geist self-center text-3xl">
          Signup
        </h1>
        <div className="flex flex-col gap-6">
          <Label htmlFor="userName">User Name</Label>
          <Input placeholder="user name" />
          <Label htmlFor="email">Email</Label>
          <Input placeholder="email" />
          <Label htmlFor="password">Password</Label>
          <Input placeholder="password" />
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input placeholder="confirmPassword" />
          <Button className="hover:bg-accent">Register</Button>
        </div>
        <p className="text-secondary-text font-inter text-[12px] self-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
