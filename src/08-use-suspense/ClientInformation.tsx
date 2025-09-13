import {type Usable, use} from "react";
import {type User} from "@/08-use-suspense/api/get-user-action.ts";

interface Props {
  getUser: Usable<User>
}

export const ClientInformation = ({getUser}: Props) => {

  const user = use(getUser)

  return (
    <div className={'bg-gradient flex flex-col gap-4'}>
      <h2 className={'text-4xl font-thin text-white'}>
        {user.name} - #{user.id}
      </h2>
      <p className={'text-2xl font-bold text-white'}>
        {user.location}
      </p>
      <p className={'text-xl font-thin text-white'}>
        {user.role}
      </p>
    </div>
  )
}
