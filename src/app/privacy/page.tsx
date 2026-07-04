import { SimplePage } from "@/components/simple-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Synema",
  description: "Privacy Policy for the Synema mobile application.",
};

export default function PrivacyPage() {
  return (
    <SimplePage title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> July 4, 2026
      </p>
      <p>
        Synema (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Synema mobile
        application. This Privacy Policy explains how we collect, use, and protect
        your information when you use our app and website.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Data We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-text">Account information:</strong> Display name,
          email address, and profile photo when you create an account.
        </li>
        <li>
          <strong className="text-text">Usage data:</strong> Movie swipes, likes,
          passes, room participation, and in-app interactions.
        </li>
        <li>
          <strong className="text-text">Device information:</strong> Device type,
          operating system version, and app version for troubleshooting and
          improvements.
        </li>
        <li>
          <strong className="text-text">Analytics data:</strong> Aggregated usage
          patterns to understand how the app is used and improve the experience.
        </li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">Authentication</h2>
      <p>
        Synema uses secure authentication providers to manage sign-in. We do not
        store your passwords. Authentication tokens are handled securely and used
        solely to verify your identity and maintain your session.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Analytics</h2>
      <p>
        We use analytics tools to understand app usage, identify issues, and
        improve features. Analytics data is aggregated and does not include
        personally identifiable information unless you have provided it through
        your account.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Cookies</h2>
      <p>
        Our website may use essential cookies to ensure proper functionality. We
        do not use cookies for advertising purposes. You can control cookie
        settings through your browser preferences.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Third Parties</h2>
      <p>We work with the following third-party services:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-text">Authentication providers</strong> for
          secure sign-in.
        </li>
        <li>
          <strong className="text-text">TMDb (The Movie Database)</strong> for
          movie metadata, posters, and streaming availability.
        </li>
        <li>
          <strong className="text-text">Analytics providers</strong> for
          aggregated usage insights.
        </li>
        <li>
          <strong className="text-text">Cloud hosting</strong> for secure data
          storage and app infrastructure.
        </li>
      </ul>
      <p>
        These providers process data on our behalf and are bound by their own
        privacy policies and data protection obligations.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Data Retention</h2>
      <p>
        We retain your data for as long as your account is active or as needed to
        provide our services. You may request deletion of your account and
        associated data at any time.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Data Deletion</h2>
      <p>
        You can request deletion of your personal data by contacting us at{" "}
        <a
          href="mailto:privacy@synemaapp.com"
          className="text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
        . We will process your request within 30 days and confirm when your data
        has been deleted.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Children&apos;s Privacy</h2>
      <p>
        Synema is not intended for children under 13. We do not knowingly collect
        personal information from children under 13.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a
          href="mailto:privacy@synemaapp.com"
          className="text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
        .
      </p>
    </SimplePage>
  );
}
