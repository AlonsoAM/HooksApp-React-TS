import {RouterProvider} from "react-router";
import {router} from "@/09-useContext/router/app.router.tsx";

export const ProfessionalApp = () => {
  return (
    <div className={'bg-gradient'}>
      <RouterProvider router={router}/>
    </div>
  )
}
