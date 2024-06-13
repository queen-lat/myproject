import { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface AuthLayoutProps {
    children: ReactNode;
    showSidebar?: boolean;
    showNavbar?: boolean;
}
const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default AuthLayout;