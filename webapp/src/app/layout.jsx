import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HHG 3.0",
  description: "The third iteration of the HHG website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          
          <Sidebar />
          {children}
        
        </div>
        
        </body>
    </html>
  );
}
