import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { IUser } from "@/types/user.types";

const User = ({user}: {user: IUser}) => {
  return (
    <div className="space-y-4">
        <div className="flex gap-2 items-center">
            <Avatar>
                <AvatarFallback>{user.firstName.charAt(0)}</AvatarFallback>
            </Avatar>
            <p>{user.firstName} {user.lastName}</p>
        </div>
    </div>
  )
}

export default User