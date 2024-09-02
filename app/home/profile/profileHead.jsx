import Image from "next/image";
import EditButton from "./button";

const ProfileHeader = ({ name, email }) => {
  return (
    <main className="flex flex-row justify-between items-center border-b pb-4 border-inputBorder">
      <div className="flex items-center">
        <div className="mr-2 mt-4 rounded-md">
          <Image src="/14608831_854885367946392_8163905116682138677_o.jpg" width={100} height={100} alt="logo" className="rounded-xl" />
        </div>
        <div>
          <h1 className="text-btnColor text-2xl font-semibold	">{name}</h1>
          <div className="flex flex-row py-1">
            <Image src="/briefcase 04.png" width={20} height={10} alt="logo" />
            <h1 className="text-btnColor text-base font-light	ml-1">
              UI/UX Desinger
            </h1>
          </div>
          <div className="flex flex-row py-1">
            <Image src="/gmail.png" width={20} height={10} alt="logo" />
            <h1 className="text-btnColor text-base font-light	ml-1">
{email}            </h1>
          </div>
        </div>
      </div>
      <div className="flex">
        <EditButton />
      </div>
    </main>
  );
};

export default ProfileHeader;
