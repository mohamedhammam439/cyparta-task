import Link from "next/link";

const EditButton = () => {
  return (
    <Link href="/home/profile/editProfile">
      {" "}
      <button className="bg-btnColor  text-white font-bold py-2 px-4 rounded w-full mt-20">
        Edite Profile
      </button>
    </Link>
  );
};

export default EditButton;
