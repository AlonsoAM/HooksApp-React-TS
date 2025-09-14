import {RouterProvider} from "react-router";
import {router} from "@/09-useContext/router/app.router.tsx";
import {UserContextProvider} from "@/09-useContext/context/UserContext.tsx";

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className={'bg-gradient'}>
        <RouterProvider router={router}/>
      </div>
    </UserContextProvider>

  )
}