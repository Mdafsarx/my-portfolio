import StickyCard from "@/components/common/StickyCard";
import React, { FC } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex gap-16 mt-20">
      <StickyCard className="w-[35%] h-[650px]" />
      <div className="w-[75%]">{children}</div>
    </main>
  );
};

export default MainLayout;
