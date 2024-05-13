import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./stylesheets/globals.css";
import "./stylesheets/animations.css";
import NavigationCoponent from "./components/navigation";
import clsx from "clsx";
import FooterSection from "./components/FooterSection";
import BackgroundLayer from "./HomePage Sections/BackgroundLayer";

const FontFamily = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(FontFamily.className, "overflow-x-hidden")}>
                <BackgroundLayer />
                <NavigationCoponent />
                {children}
                <FooterSection />
            </body>
        </html>
    );
}
