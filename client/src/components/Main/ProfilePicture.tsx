import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@/contexts/UserContext";

const ProfilePicture = () => {
    const { user } = useUser();

  return(
    <Avatar>
        <AvatarImage src={`/Profile/${user? user.id : "fallback"}.webp`} />
        <AvatarFallback>{user? user.initials : "MR"}</AvatarFallback>
    </Avatar>
  )
}

export default ProfilePicture;
