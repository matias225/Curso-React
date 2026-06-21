import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
  getUser: Usable<User>
}

export const ClientInformation = ({ getUser }: Props) => {
  const user = use(getUser);

  // useEffect(() => {
  //   getUserAction(id).then(user => console.log(user));
  // }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h3 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h3>
      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  )
}
