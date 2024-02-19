import NavLogo from "./components/NavLogo";
import ToggleSwitch from "./components/ToggleSwitch";

export default function Home() {
  return (
    <main className="flex mx-auto max-w-[1280px] min-h-screen flex-col items-center h-[5000px]">
      <ToggleSwitch />
      <NavLogo />
      <div className='py-10 text-4xl text-center text-balance'>        
        <p>With over ten years of commercial experience, building and maintaining pixel perfect responsive websites.</p>
        <p>Specialising in front end development, with a passion for creating beautiful and functional user interfaces.</p>
        <p>Have a look around and please feel free to say hi.</p>
      </div>
      <div>left content</div>
    </main>
  );
}