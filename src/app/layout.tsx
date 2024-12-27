import Profile from "@/components/Profile";
import { Toaster } from "@/components/ui/toaster";
import getSession from "@/lib/getSession";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { redirect } from "next/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Dog Daycare Management System",
};

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;
  const admin = user?.role === "ADMIN";

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        <div className="absolute right-0 top-0 px-4 py-2.5">
          <Profile />
        </div>
        {admin ? (
          <>{children}</>
        ) : (
          <div className="pt-40 text-center text-2xl">
            Please log in with Admin credentials.
          </div>
        )}
        <Toaster />
      </body>
    </html>
  );
}
