import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated? (
        <Navigate to="/" />
      ) : (

        <>
          <section className="flex flex-grow justify-center items-center  scrollbar-hide overflow-auto py-10">
            <Outlet />
          </section>

          <img src="/assets/images/side-img.svg" alt="logo" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" />
        </>


      )}
    </>
  );
}
