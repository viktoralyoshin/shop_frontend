"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";

const User = ({ userId }: { userId: string }) => {
  const user = useUser(userId);
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarFallback>{user?.firstName.charAt(0)}</AvatarFallback>
      </Avatar>
      <p>{user?.firstName} {user?.lastName}</p>
    </div>
  );
};

export default User;
