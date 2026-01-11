import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/features/navbar";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/components/providers/language-provider";
import { MobileNav } from "@/components/features/mobile-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Alex Designer | Digital Craftsman",
  description: "Product Designer & Frontend Developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          newsreader.variable,
          "antialiased min-h-screen flex flex-col bg-build text-primary transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {/* Navbar (Desktop & Tablet) - MobileNav handles mobile menu overlay but we use Navbar for header now or hide one? 
                 Let's keep Navbar visible on all screens as the header, and MobileNav as just the drawer. 
                 Since MobileNav renders a header md:hidden, checking Navbar... Navbar has sticky header. 
                 To avoid double header on mobile: 
                 We will HIDE MobileNav's header in MobileNav component (we can't edit it here easily without overwriting file). 
                 Easier: Hide Navbar on mobile? No, user wants top nav. 
                 Okay, simplify: Just render Navbar. Navbar has links hidden on mobile.
                 Then render MobileNav. MobileNav has a header visible on mobile.
                 If we keep both, we have double header. 
                 
                 Solution: Hide MobileNav here (wait, we need the drawer).
                 Let's just use Navbar for everything. 
                 Wait, I haven't updated Navbar to trigger MobileNav.
                 
                 Plan B: Keep User's "Remove Left Sidebar" constraint strictly.
                 MobileNav is fine for mobile. 
                 Navbar for Desktop.
             */}
            <div className="hidden md:block">
              <Navbar />
            </div>

            {/* Mobile Nav (includes Header for mobile) */}
            <MobileNav />

            {/* Main Content */}
            <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-12 relative flex flex-col min-h-screen">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
