import { SimplePage } from "@/components/simple-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Synema",
  description: "Get in touch with the Synema team.",
};

export default function ContactPage() {
  return (
    <SimplePage title="Contact">
      <p>We&apos;d love to hear from you.</p>

      <div className="space-y-6 !mt-8">
        <div>
          <h2 className="text-base font-semibold text-text">General inquiries</h2>
          <a
            href="mailto:hello@synemaapp.com"
            className="text-primary hover:underline"
          >
            hello@synemaapp.com
          </a>
        </div>
        <div>
          <h2 className="text-base font-semibold text-text">Support</h2>
          <a
            href="mailto:support@synemaapp.com"
            className="text-primary hover:underline"
          >
            support@synemaapp.com
          </a>
        </div>
        <div>
          <h2 className="text-base font-semibold text-text">Privacy</h2>
          <a
            href="mailto:privacy@synemaapp.com"
            className="text-primary hover:underline"
          >
            privacy@synemaapp.com
          </a>
        </div>
      </div>
    </SimplePage>
  );
}
