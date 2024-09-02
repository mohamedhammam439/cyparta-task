import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex flex-row h-14 justify-end	p-2">
      <div>
        <Image src="/Notification.png" width={40} height={30} alt="logo" />
      </div>
      <div className="h-14">
        <Image
          src="/14608831_854885367946392_8163905116682138677_o.jpg"
          width={40}
          height={40}
          alt="logo"
          className="rounded-full ml-4 h-10	"
        />
      </div>
    </nav>
  );
};

export default Header;
