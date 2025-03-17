import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import vazirFont from "@/constants/localFonts";
import "@/styles/globals.css";
import SidebarBlog from "./_/components/SidebarBlog";
import NavbarBlog from "./_/components/NavbarBlog";

export const metadata = {
  title: "دوربین / بلاگ",
  description: "دوربین فروشگاه آنلاین برای دوربین های حفاظتی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <ReactQueryProvider>
          <Toaster />
          <main className="flex h-screen">
            <SidebarBlog/>
            <section className="flex-1 py-4 px-5">
              <NavbarBlog/>
              {children}
            </section>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
