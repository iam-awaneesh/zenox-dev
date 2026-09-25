import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenoxdev.com"),
  title: {
    default: "ZenoxDev | Engineering Digital Growth Through Code, SEO & Automation",
    template: "%s | ZenoxDev",
  },
  description:
    "ZenoxDev is a premier full-stack software development and digital growth agency. We architect high-performance web and mobile applications, scale organic traffic with AI-driven SEO, and automate operations with enterprise CI/CD workflows.",
  keywords: [
    "Full-Stack Web Development",
    "Mobile App Development",
    "React Native Agency",
    "Next.js Development",
    "AI-Powered SEO",
    "Technical SEO Optimization",
    "Business Automation",
    "DevOps and CI/CD",
    "Software Engineering Agency",
    "Custom Software Solutions",
  ],
  authors: [{ name: "ZenoxDev Engineering Team", url: "https://zenoxdev.com" }],
  creator: "ZenoxDev",
  publisher: "ZenoxDev",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenoxdev.com",
    siteName: "ZenoxDev",
    title: "ZenoxDev | Full-Stack Software Engineering & AI Growth Agency",
    description:
      "We build scalable web & mobile apps, supercharge organic search visibility with predictive AI, and streamline operational workflows with robust automation.",
    images: [
      {
        url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "ZenoxDev - Full-Stack IT & Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenoxDev | Full-Stack IT, SEO & Automation Agency",
    description:
      "Engineering modern digital growth with Next.js, React Native, AI-powered SEO, and intelligent automation.",
    images: ["https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-600 bg-white selection:bg-primary-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
