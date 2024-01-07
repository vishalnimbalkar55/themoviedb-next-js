import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const navItems = [
    {
      item: "All",
      link: "/",
    },
    {
      item: "Action",
      link: "/action",
    },
    {
      item: "Comedy",
      link: "/comedy",
    },
    {
      item: "Horror",
      link: "/horror",
    },
    {
      item: "Drama",
      link: "/drama",
    },
    {
      item: "Sci-Fi",
      link: "/sci-fi",
    },
  ];
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className={inter.className}>
        <NavBar navItems={navItems} />
        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
