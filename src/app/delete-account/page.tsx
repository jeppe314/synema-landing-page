import { SimplePage } from "@/components/simple-page";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account – Synema",
  description:
    "Request deletion of your Synema account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <SimplePage title="Delete Your Account">
      <p>
        You can request deletion of your Synema account and associated personal
        data at any time.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        How to request deletion
      </h2>
      <p>Send an email to:</p>
      <p>
        <a
          href="mailto:privacy@synemaapp.com?subject=Account%20Deletion%20Request"
          className="font-semibold text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
      </p>
      <p>Please include:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>The email address associated with your Synema account</li>
        <li>Your display name (if you remember it)</li>
        <li>A clear request to delete your account</li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">What gets deleted</h2>
      <p>When your account is deleted, we remove:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Your account information (display name, email, profile picture)</li>
        <li>Your swipe history, likes, and passes</li>
        <li>Rooms you created</li>
        <li>Your participation in shared rooms</li>
        <li>Associated preferences and in-app data</li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        What may be retained
      </h2>
      <p>
        We may retain limited information where required by law or for legitimate
        business purposes, such as:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Fraud prevention or security records</li>
        <li>Aggregated, anonymized analytics that cannot identify you</li>
        <li>Records we are legally required to keep</li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">Processing time</h2>
      <p>
        We aim to process deletion requests within{" "}
        <strong className="text-text">30 days</strong> and will confirm by email
        once your account and personal data have been deleted.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">More information</h2>
      <p>
        For full details on how we handle your data, see our{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <p className="!mt-8">
        Questions? Contact{" "}
        <a
          href="mailto:privacy@synemaapp.com"
          className="text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
      </p>
    </SimplePage>
  );
}
