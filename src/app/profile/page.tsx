"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get(`api/users/logout`);
      toast.success("logout successful");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
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
