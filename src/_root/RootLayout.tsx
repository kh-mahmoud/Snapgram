import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { useUserContext } from "@/context/AuthContext";

const RootLayout = () => {

  const { isAuthenticated } = useUserContext()

  return (
    <div className="w-full md:flex h-screen">
      {isAuthenticated &&(
        <>
          <Topbar />
          <LeftSidebar />

          <section  className="felx flex-1 md:ml-[270px] pb-[90px]  ">
            <Outlet />
          </section>
          <Bottombar />
        </>
      ) }


    </div>
  )
};

export default RootLayout;
