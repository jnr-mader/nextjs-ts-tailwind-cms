import Image from "next/image";
import jnrLogo from "@/public/jnr.svg";  

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <Image src={jnrLogo} alt="Jnr" width={200} height={200} priority />
        <h1 className="text-4xl font-bold">Jnr 78</h1>
        <h2>Hey Whatsup!?!</h2>
        <div>
          I`&apos;`m <h2>Junior</h2>, a London based <h2>Frontend Developer</h2>
          .Welcome to <h2>Jnr78</h2>,a tiny peek into my world.
        </div>
      </div>
      <div>left content</div>
    </main>
  );
}