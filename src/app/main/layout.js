import Navber from "@/components/Navber/Navber";

export default function MainLayout({children}) {
    return (
     <>
        <Navber/>
        {children}
     </>
    );
  }