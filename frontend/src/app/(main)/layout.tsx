import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import vazirFont from "@/constants/localFonts";
import "@/styles/globals.css";
import FooterLayout from "./_/components/FooterLayout";

export const metadata = {
  title: "دوربین / صفحه اصلی",
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
          {children}
          <FooterLayout/>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
