import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import vazirFont from "@/constants/localFonts";
import "@/styles/globals.css";
import Sidebar from "../_/components/Sidebar";
import Navbar from "../_/components/Navbar";

export const metadata = {
  title: "پنل کاربری",
  description: "کیولاین برای ساخت پرسشنامه فرم و نظرسنجی آنلاین",
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
          <section className="flex container mx-auto">
            <Sidebar />
            <div className="flex-1">
              <Navbar />
              <div className="py-5 lg:px-7 px-4">{children}</div>
            </div>
          </section>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
