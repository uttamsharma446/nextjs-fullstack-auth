"use-client";

import React, { FC } from "react";

const UserProfile: FC<any> = ({ params }) => {
  return <div>UserProfile{params.id}</div>;
};

export default UserProfile;
