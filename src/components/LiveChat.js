"use client";

import { LiveChatWidget } from "@livechat/widget-react";
import { useEffect, useState } from "react";

export default function LiveChat() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <LiveChatWidget license="18537651" />;
}
