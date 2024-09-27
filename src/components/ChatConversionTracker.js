"use client";
import { useEffect } from "react";

export default function ChatConversionTracker() {
  useEffect(() => {
    // Define the function to handle customer status changes
    function onCustomerStatusChanged(data) {
      switch (data.status) {
        case "queued":
          console.log("Customer is in queue");
          break;
        case "chatting":
          console.log("Customer is currently chatting");
          // Trigger Google Ads conversion event
          window.gtag("event", "conversion", {
            send_to: "AW-11471893486/7LaNCNjtxYkZEO7nnN4q",
          });
          break;
        case "invited":
          console.log(
            "Customer received an invitation but didn't start the chat"
          );
          break;
        case "browsing":
          console.log("Customer is browsing the site");
          break;
      }
    }

    // Poll for LiveChatWidget to ensure it's available
    const interval = setInterval(() => {
      if (
        window.LiveChatWidget &&
        typeof window.LiveChatWidget.on === "function"
      ) {
        // Attach the LiveChat event listener
        window.LiveChatWidget.on(
          "customer_status_changed",
          onCustomerStatusChanged
        );
        // Clear the interval once it's attached
        clearInterval(interval);
      }
    }, 500); // Poll every 500ms

    // Cleanup function to remove the event listener if the component unmounts
    return () => {
      if (window.LiveChatWidget) {
        window.LiveChatWidget.off(
          "customer_status_changed",
          onCustomerStatusChanged
        );
      }
      clearInterval(interval); // Clear the interval if component unmounts
    };
  }, []);

  return null; // No UI needed, just the tracking logic
}
