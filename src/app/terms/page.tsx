import { SimplePage } from "@/components/simple-page";
import type { Metadata } from "next";
import Link from "next/link";

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
      <p>Welcome to Synema!</p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Synema mobile
        application and the website{" "}
        <a
          href="https://www.synemaapp.com"
          className="text-primary hover:underline"
        >
          https://www.synemaapp.com
        </a>{" "}
        (collectively, the &quot;Service&quot;).
      </p>
      <p>
        By creating an account or using Synema, you agree to these Terms. If you
        do not agree, please do not use the Service.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Eligibility</h2>
      <p>
        You must be at least <strong className="text-text">13 years old</strong> to
        use Synema.
      </p>
      <p>
        By using the Service, you confirm that you meet this requirement and that
        you have the legal capacity to enter into these Terms.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Use of the Service</h2>
      <p>
        Synema is a social movie discovery platform that helps individuals and
        groups discover movies and decide what to watch together.
      </p>
      <p>
        You agree to use the Service only for lawful purposes and in accordance
        with these Terms.
      </p>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and for all activity that occurs under your account.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">User Conduct</h2>
      <p>You agree not to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Use the Service for any unlawful purpose.</li>
        <li>Harass, threaten, abuse, or impersonate other users.</li>
        <li>Upload or share illegal, offensive, or inappropriate content.</li>
        <li>
          Attempt to gain unauthorized access to our systems or other users&apos;
          accounts.
        </li>
        <li>Interfere with, disrupt, or overload the Service.</li>
        <li>
          Use automated tools, bots, or scripts to misuse the Service.
        </li>
      </ul>

      <h2 className="!mt-8 text-lg font-semibold text-text">Account Suspension</h2>
      <p>
        We reserve the right to suspend or permanently terminate accounts that
        violate these Terms, misuse the Service, or negatively impact other users.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Content</h2>
      <p>
        Movie information, posters, trailers, ratings, and streaming availability
        are provided by <strong className="text-text">TMDb (The Movie Database)</strong>{" "}
        and other third-party providers.
      </p>
      <p>
        While we strive to provide accurate information, we cannot guarantee that
        all movie data is complete, accurate, or up to date.
      </p>
      <p>
        <strong className="text-text">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </strong>
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Intellectual Property
      </h2>
      <p>
        Synema, including its name, branding, design, software, graphics, and
        original content, is owned by Synema and protected by applicable copyright,
        trademark, and intellectual property laws.
      </p>
      <p>
        You may not copy, modify, distribute, reverse engineer, or exploit any
        part of the Service without prior written permission.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Availability</h2>
      <p>
        We aim to provide a reliable service but cannot guarantee uninterrupted
        availability.
      </p>
      <p>
        Features may change, be removed, or be temporarily unavailable due to
        maintenance, technical issues, or future development.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Disclaimer</h2>
      <p>
        The Service is provided <strong className="text-text">&quot;as is&quot;</strong> and{" "}
        <strong className="text-text">&quot;as available&quot;</strong>, without warranties of
        any kind, whether express or implied.
      </p>
      <p>
        We do not guarantee that the Service will always be available, secure,
        error-free, or meet your expectations.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Limitation of Liability
      </h2>
      <p>
        To the fullest extent permitted by applicable law, Synema shall not be
        liable for any indirect, incidental, consequential, special, or punitive
        damages arising from your use of, or inability to use, the Service.
      </p>
      <p>Your use of the Service is entirely at your own risk.</p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Privacy</h2>
      <p>
        Your use of Synema is also governed by our{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        , which explains how we collect, use, and protect your information.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Governing Law</h2>
      <p>
        These Terms are governed by the laws of{" "}
        <strong className="text-text">Sweden</strong>, without regard to conflict of
        law principles.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">
        Changes to These Terms
      </h2>
      <p>We may update these Terms from time to time.</p>
      <p>
        When changes are made, the &quot;Last updated&quot; date at the top of this page
        will be revised.
      </p>
      <p>
        Continued use of the Service after changes become effective constitutes
        acceptance of the updated Terms.
      </p>

      <h2 className="!mt-8 text-lg font-semibold text-text">Contact</h2>
      <p>If you have any questions regarding these Terms, please contact us at:</p>
      <p>
        <a
          href="mailto:privacy@synemaapp.com"
          className="font-semibold text-primary hover:underline"
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
