"use client";

import { Button, Typography } from "antd";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 16 }}>
      <Title>Next.js + Ant Design + TanStack Query</Title>
      <Text type="secondary">Project is ready. Start building!</Text>
      <Button type="primary" size="large">Get Started</Button>
    </div>
  );
}
