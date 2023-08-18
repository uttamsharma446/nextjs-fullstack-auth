"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState<any>("");
  const logout = async () => {
    try {
      const response = await axios.get(`api/users/logout`);
      toast.success("logout successful");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const getUser = async () => {
    try {
      const response = await axios.get("api/users/me/");
      setData(response.data.data);
    } catch (err) {
      //
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="bg-green-600 p-1 ">
        {data?._id ? (
          <Link href={`/profile/${data?._id}`}>{data?._id}</Link>
        ) : (
          "Nothing there"
        )}
      </h1>
      <button
        onClick={getUser}
        className="bg-red-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-all 
        m-10
        "
      >
        Fetch user
      </button>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
