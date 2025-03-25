import StickyCard from "@/components/common/StickyCard";
import React, { FC } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex gap-20 mt-20">
      <StickyCard />
      {children}
    </main>
  );
};

export default MainLayout;
