import Link from "next/link";
import ProfileHeader from "./profileHead";
import Image from "next/image";
import RightVector from "@/app/_components/rightVector";

const fetchProfileInfo = async () => {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch("http://193.22.146.56:4242/users/me", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile info');
    }

    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
  }
};

const getAccessToken = async () => {
  try {
    const response = await fetch("http://193.22.146.56:4242/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'hammam@gmail.com', password: '123456789' }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    console.error(error);
  }
};

const Profile = async () => {
  const Data = await fetchProfileInfo();
  console.log('Data :>> ', Data);
  return (
    <main className="pb-5">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-base font-semibold text-btnColor">Employees</h1>
        <span><RightVector  width={8} height={5}/></span>
        <h1 className="text-base font-semibold text-btnColor">Profile</h1>

      </div>
      <ProfileHeader name={Data.fullName} email={Data.email} />
      <nav className="flex flex-row my-2 border-b py-1 border-nav w-44">  
          <Image src='/user.png' width={20} height={5} alt="logo" />
          <h1 className="text-nav font-semibold	text-base">Personal Informatoin</h1>
      </nav>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">First Name</h4>
          <h4 className="text-infoAns text-base font-light my-2">{Data.fullName}</h4>
        </div>

        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Last Name</h4>
          <h4 className="text-infoAns text-base font-light my-2">{Data.sonOf}</h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Mobile Number</h4>
          <h4 className="text-infoAns text-base font-light my-2">{Data.rotarianId}</h4>
        </div>

        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Email Address</h4>
          <h4 className="text-infoAns text-base font-light my-2">{Data.rotarianId}</h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Date Of Birth</h4>
          <h4 className="text-infoAns text-base font-light my-2">14 July , 1995</h4>
        </div>

        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Marital status</h4>
          <h4 className="text-infoAns text-base font-light my-2">single</h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Gendar</h4>
          <h4 className="text-infoAns text-base font-light my-2">male</h4>
        </div>

        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Nationality</h4>
          <h4 className="text-infoAns text-base font-light my-2">Egypt</h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Address</h4>
          <h4 className="text-infoAns text-base font-light my-2">Madi</h4>
        </div>

        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">City</h4>
          <h4 className="text-infoAns text-base font-light my-2">Cairo</h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">State</h4>
          <h4 className="text-infoAns text-base font-light my-2">Cairo</h4>
        </div>

        <div className="w-1/2 border-b border-outInputBorder ">
          <h4 className="text-infoLabel text-sm font-light">Zip Code</h4>
          <h4 className="text-infoAns text-base font-light my-2">521547</h4>
        </div>
      </div>
      <div className="flex justify-between gap-5 pt-2">
        <div className="w-1/2 ">
          <h4 className="text-infoLabel text-sm font-light">Work's Hours</h4>
          <h4 className="text-infoAns text-base font-light my-2">185 hour</h4>
        </div>

        <div className="w-1/2 flex flex-row justify-between">
          <div className="w-1/2 ">
            <h4 className="text-infoLabel text-sm font-light">Salary/hour</h4>
            <h4 className="text-infoAns text-base font-light my-2">300 EGP</h4>
          </div>
          <div className="w-1/2 ">
            <h4 className="text-nav text-sm font-normal">Total Salary</h4>
            <h4 className="text-infoAns text-base font-light my-2">54000 EGP</h4>
        </div>
        </div>

       
      </div>
    </main>
  );
};

export default Profile;
