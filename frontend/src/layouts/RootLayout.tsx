import Sidebar from "./sidebar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className=" flex-1 mx-auto p-4 mt-5 ">{children}</main>
    </div>
  );
}

export default RootLayout;
