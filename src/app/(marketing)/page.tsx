import Logo from "@/components/Logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#5dc9a8] min-h-screen items-center justify-center flex gap-10 xl:flex-row flex-col mx-auto max-w-6xl">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="preview of petsoft"
        width={519}
        height={472}
      />
      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium">
          Use PetSoft to easily keep track of pets under your care. Get lifttime
          access for $299.
        </p>
        <div className="mt-10 space-x-10">
          <Link href="/signup">
            <Button >Getting started</Button>
          </Link>
          <Link href="/login">
            <Button  variant="secondary">
              Log in
            </Button>
          </Link>
        
        </div>
      </div>
    </div>
  );
}
