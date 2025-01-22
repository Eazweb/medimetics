import Logo from "@/components/Logo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex flex-col z-50 ">
        <header className="p-6">
          <Logo />
        </header>
        <main className="flex-grow flex items-center justify-center px-[10%]">
          <div className="container mx-auto flex flex-col justify-center lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-4xl text-zinc-500 mb-2 lg:mb-4">
                Hello pretty faces
              </h2>
              <h1 className="text-6xl lg:text-8xl font-bold text-amber-800 mb-2 lg:mb-4">
                Medimetics
              </h1>
              <p className="text-xl lg:text-3xl font-medium text-amber-600">
                Coming soon...
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="/model.jpg"
                alt="Medimetic"
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </main>
      </div>
    </AuroraBackground>
  );
}
