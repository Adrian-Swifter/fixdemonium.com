"use client";

import LiveChat from "../components/LiveChat";
import ChatConversionTracker from "../components/ChatConversionTracker";
import { usePathname } from "next/navigation"; // Client-side hook

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // Use the client-side pathname hook

  const isSnakePage = pathname === "/games/snake"; // Check if the current route is the snake page

  return (
    <>
      {/* Render the page content */}
      {children}

      {/* Conditionally render LiveChat and ChatConversionTracker */}
      {!isSnakePage && (
        <>
          <LiveChat />
          <ChatConversionTracker />
        </>
      )}
    </>
  );
}
