import NavLogo from "./components/NavLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-[5000px]">
      <NavLogo />
      <div>        
        <p>With over ten years of commercial experience, building and maintaining pixel perfect responsive websites.</p>
        <p>Specialising in front end development, with a passion for creating beautiful and functional user interfaces.</p>
        <p>Have a look around and please feel free to say hi.</p>
      </div>
      <div>left content</div>
    </main>
  );
}