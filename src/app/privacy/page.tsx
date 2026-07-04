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
        application and the website{" "}
        <a
          href="https://www.synemaapp.com"
          className="text-primary hover:underline"
        >
          https://www.synemaapp.com
        </a>{" "}
        (&quot;the Service&quot;).
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use it,
        and what choices you have regarding your data.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Information We Collect
      </h2>
      <p>Depending on how you use Synema, we may collect the following information:</p>

      <h3 className="!mt-6 text-base font-semibold text-text">
        Account Information
      </h3>
      <p>When you create an account, we may collect:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Display name</li>
        <li>Email address</li>
        <li>Profile picture (if provided through your authentication provider)</li>
      </ul>
      <p>
        We do <strong className="text-text">not</strong> store your password.
        Authentication is handled securely by our authentication provider.
      </p>

      <h3 className="!mt-6 text-base font-semibold text-text">Usage Data</h3>
      <p>To provide Synema&apos;s core functionality, we collect information such as:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Movies you swipe, like, or pass</li>
        <li>Rooms you create or join</li>
        <li>Shared movie selections</li>
        <li>General in-app interactions</li>
      </ul>
      <p>
        This data allows us to provide recommendations, synchronize rooms, and
        improve the user experience.
      </p>

      <h3 className="!mt-6 text-base font-semibold text-text">
        Device Information
      </h3>
      <p>We may collect limited technical information including:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Device model</li>
        <li>Operating system version</li>
        <li>App version</li>
        <li>Language settings</li>
      </ul>
      <p>
        This information helps us troubleshoot issues and improve compatibility.
      </p>

      <h3 className="!mt-6 text-base font-semibold text-text">Analytics</h3>
      <p>
        We may collect anonymous or aggregated analytics data to understand how
        Synema is used and to improve the app.
      </p>
      <p>
        Analytics data is used only for product improvement and is not sold to
        third parties.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        How We Use Your Information
      </h2>
      <p>We use your information to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Create and manage your account</li>
        <li>Authenticate your identity</li>
        <li>Synchronize movie rooms</li>
        <li>Save your preferences</li>
        <li>Improve app performance and reliability</li>
        <li>Detect abuse or misuse of the Service</li>
        <li>Provide customer support</li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">Authentication</h2>
      <p>
        Synema uses <strong className="text-text">Supabase Authentication</strong>{" "}
        to securely manage user sign-in.
      </p>
      <p>
        Authentication tokens are used only to verify your identity and maintain
        your session.
      </p>
      <p>We never have access to or store your passwords.</p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Third-Party Services
      </h2>
      <p>We rely on trusted third-party services to operate Synema, including:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-text">Supabase</strong> for authentication and
          database services
        </li>
        <li>
          <strong className="text-text">TMDb (The Movie Database)</strong> for
          movie information, posters, trailers, and streaming availability
        </li>
        <li>Cloud infrastructure providers for secure hosting and storage</li>
        <li>
          Analytics providers (if enabled) to understand anonymous usage patterns
        </li>
      </ul>
      <p>Each provider processes data according to its own privacy policy.</p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Cookies</h2>
      <p>
        Our website may use essential cookies that are necessary for the website
        to function properly.
      </p>
      <p>We do not use cookies for advertising or cross-site tracking.</p>
      <p>You can control cookies through your browser settings.</p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Data Retention</h2>
      <p>
        We retain your information only for as long as necessary to provide the
        Service or comply with legal obligations.
      </p>
      <p>
        If you delete your account or request deletion, we will remove your
        personal information within a reasonable period unless we are legally
        required to retain certain data.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Data Deletion</h2>
      <p>
        You may request deletion of your account and associated personal data at
        any time by contacting:
      </p>
      <p>
        <a
          href="mailto:privacy@synemaapp.com"
          className="font-semibold text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
      </p>
      <p>
        We aim to process deletion requests within <strong className="text-text">30 days</strong> and
        will confirm once the request has been completed.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Access your personal data</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your data</li>
        <li>Receive a copy of your data</li>
        <li>Object to certain types of processing</li>
      </ul>
      <p>To exercise any of these rights, contact us at:</p>
      <p>
        <a
          href="mailto:privacy@synemaapp.com"
          className="font-semibold text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Security</h2>
      <p>
        We use industry-standard security measures to protect your information
        during transmission and storage.
      </p>
      <p>
        However, no method of electronic transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Children&apos;s Privacy
      </h2>
      <p>Synema is not intended for children under the age of 13.</p>
      <p>
        We do not knowingly collect personal information from children under 13.
        If we become aware that such information has been collected, we will
        delete it promptly.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Changes to This Privacy Policy
      </h2>
      <p>We may update this Privacy Policy from time to time.</p>
      <p>
        Any changes will be posted on this page, and the &quot;Last updated&quot; date
        will be revised accordingly.
      </p>
      <p>
        Continued use of Synema after changes become effective constitutes
        acceptance of the updated Privacy Policy.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Contact</h2>
      <p>
        If you have any questions about this Privacy Policy or your personal data,
        please contact us:
      </p>
      <p>
        <strong className="text-text">Email:</strong>{" "}
        <a
          href="mailto:privacy@synemaapp.com"
          className="text-primary hover:underline"
        >
          privacy@synemaapp.com
        </a>
      </p>

      <p className="!mt-8 text-sm text-text-secondary">
        © 2026 Synema. All rights reserved.
      </p>
    </SimplePage>
  );
}
