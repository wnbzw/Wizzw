import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王志文 | Java 后端开发",
  description:
    "王志文的个人主页，专注于 Java 后端开发、分布式系统、Spring 全家桶与 Redis/MySQL。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
