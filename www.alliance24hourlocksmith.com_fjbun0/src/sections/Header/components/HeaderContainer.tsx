import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { CallButton } from "@/components/CallButton";

export const HeaderContainer = () => {
  return (
    <div className="items-center caret-transparent flex h-[60px] justify-between max-w-[1120px] w-full mx-auto px-4">
      <Logo />
      <DesktopNav />
      <CallButton />
    </div>
  );
};
