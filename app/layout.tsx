import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-shahidhir.vercel.app"),
  title: {
    default: "Free AI Marketing Consultation | Digital Shahidhir",
    template: "%s | Digital Shahidhir"
  },
  description:
    "Book a free AI digital marketing consultation and get a customized marketing plan for your business.",
  openGraph: {
    title: "Get a Clear Marketing Plan to Help Your Business Get More Customers",
    description:
      "Request a free one-to-one AI marketing consultation and leave with a clear direction for your next 90 days.",
    url: "https://digital-shahidhir.vercel.app",
    siteName: "Digital Shahidhir",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Shahidhir free AI marketing consultation"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | Digital Shahidhir",
    description:
      "Get a customized digital marketing plan based on your business, goals, and current marketing situation."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2250352755803092');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2250352755803092&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
