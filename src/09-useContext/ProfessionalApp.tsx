import { Outlet } from "react-router";
import { UserContextProvider } from "@/09-useContext/context/UserContext.tsx";

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className={'bg-gradient'}>
        <Outlet />
      </div>
    </UserContextProvider>

  )
}