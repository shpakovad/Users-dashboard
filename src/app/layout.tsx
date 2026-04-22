import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdProvider from "@/providers/AntdProvider";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "App",
  description: "Next.js + TypeScript + Ant Design + TanStack Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AntdRegistry>
          <AntdProvider>
            <QueryProvider>{children}</QueryProvider>
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
