import { SimplePage } from "@/components/simple-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – Synema",
  description: "Terms of Service for the Synema mobile application.",
};

export default function TermsPage() {
  return (
    <SimplePage title="Terms of Service">
      <p>
        <strong>Last updated:</strong> July 4, 2026
      </p>
      <p>
        By using Synema, you agree to these Terms of Service. Please read them
        carefully.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Use of the App</h2>
      <p>
        Synema is a social movie discovery app that helps groups find movies to
        watch together. You must be at least 13 years old to use the app. You are
        responsible for maintaining the security of your account.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">User Conduct</h2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Use the app for any unlawful purpose.</li>
        <li>Harass, abuse, or harm other users.</li>
        <li>Attempt to gain unauthorized access to our systems.</li>
        <li>Interfere with the proper functioning of the app.</li>
        <li>Share inappropriate content in rooms or chats.</li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">Content</h2>
      <p>
        Movie information is provided by third-party sources including TMDb. We
        do not guarantee the accuracy or availability of movie data or streaming
        information.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Intellectual Property</h2>
      <p>
        Synema and its original content, features, and functionality are owned by
        Synema and are protected by applicable copyright and trademark laws.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Disclaimer</h2>
      <p>
        The app is provided &quot;as is&quot; without warranties of any kind. We do not
        guarantee uninterrupted or error-free service.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Synema shall not be liable for
        any indirect, incidental, or consequential damages arising from your use
        of the app.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the app
        after changes constitutes acceptance of the updated terms.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a
          href="mailto:legal@synemaapp.com"
          className="text-primary hover:underline"
        >
          legal@synemaapp.com
        </a>
        .
      </p>
    </SimplePage>
  );
}
