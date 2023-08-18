"use client";

import axios from "axios";
import React, { FC, useEffect, useState } from "react";

const UserProfile: FC<any> = ({ params }) => {
  const [data, setData] = useState("");

  return <div>{params.id}</div>;
};

export default UserProfile;
