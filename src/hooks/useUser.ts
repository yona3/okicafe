import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useUser = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null | undefined>(undefined);

  const handleGetUser = async () => {
    if (!session?.user?.email) {
      setUser(null);
      return;
    }

    const { email } = session.user;
    const response = await fetch(`/api/user?email=${email}`);
    const user = await response.json();
    console.log("user: ", user);

    setUser(user);
  };

  const handleDeleteUser = async () => {
    if (!session?.user?.email) {
      setUser(undefined);
      return;
    }

    const { email } = session.user;
    await fetch(`/api/user?email=${email}`, {
      method: "DELETE",
    });
  };

  useEffect(
    () => {
      handleGetUser();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [session],
  );

  return { user, handleDeleteUser };
};
