import Image from "next/image";
import Links from "./links";

const Sidebar = () => {
 
  return (
    <main className="min-w-1/4 border border-sidebarBorder mr-8 rounded-3xl flex flex-col">
      <Image src="/sidebar_logo.png" width={247} height={158} alt="logo" />
      <Links />
    </main>
  );
};

export default Sidebar;
