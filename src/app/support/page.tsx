import { SimplePage } from "@/components/simple-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support – Synema",
  description: "Get help with the Synema app.",
};

export default function SupportPage() {
  return (
    <SimplePage title="Support">
      <p className="text-lg text-text">Need help?</p>
      <p>
        Email us at{" "}
        <a
          href="mailto:support@synemaapp.com"
          className="text-primary hover:underline"
        >
          support@synemaapp.com
        </a>
      </p>
      <p>
        We typically respond within 1–2 business days. Please include your
        device type, app version, and a description of the issue.
      </p>
    </SimplePage>
  );
}
