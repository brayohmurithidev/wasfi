import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Mail } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to delete your Wakil Fleet account in the app, how fleet Owners close their account, and what happens to your data.",
  alternates: { canonical: "/delete-account" },
};

const { email, retention } = site;

/*
 * The link given to Google Play and the App Store. Matches the app on
 * origin/main: Settings → Delete my account for drivers and managers;
 * Owners request closure in the app and Wakil closes the fleet in Ops.
 */
export default function DeleteAccountPage() {
  const subject = encodeURIComponent("Delete my Wakil Fleet account");
  const body = encodeURIComponent(
    "Please delete my Wakil Fleet account.\n\nName:\nPhone number on the account:\nFleet name:\n",
  );
  return (
    <LegalPage
      title="Delete your account"
      current="/delete-account"
      intro={<p>You can delete your Wakil Fleet account at any time, from the app.</p>}
    >
      <h2 id="drivers-managers">Drivers and managers</h2>
      <ol>
        <li>Open Wakil Fleet and go to <strong>More → Settings → Delete my account</strong>.</li>
        <li>Enter your password to confirm.</li>
        <li>Your account is deleted straight away, and you are signed out on every device.</li>
      </ol>
      <p>
        If you have an SOS that is still open, it must be resolved first, so nobody loses track of
        an emergency.
      </p>

      <h2 id="owners">Fleet Owners</h2>
      <p>
        The fleet, its vehicles, trackers and subscription belong to the Owner&apos;s account, so
        an Owner cannot delete it alone. In the app, go to{" "}
        <strong>More → Settings → Delete my account</strong> and tap{" "}
        <strong>Request account closure</strong>. Wakil contacts you to close the fleet, settle any
        unpaid bill and switch off the trackers, and then deletes your account.
      </p>
      <p>When a fleet is closed, its saved payment card is removed and disabled with Paystack.</p>

      <h2 id="no-access">If you can&apos;t sign in</h2>
      <p>
        Email <Mail to={email.privacy} /> from the email address on your account, or include the
        phone number on your account. We confirm the request is from you, usually with a code sent
        to your phone, and delete the account within {retention.emailRequestDays} days.
      </p>
      <p>
        <a
          href={`mailto:${email.privacy}?subject=${subject}&body=${body}`}
          className="inline-block rounded-full bg-ink px-6 py-3 font-semibold"
          style={{ color: "var(--color-on-ink)", textDecoration: "none" }}
        >
          Email a deletion request
        </a>
      </p>

      <h2 id="deleted">What is deleted</h2>
      <ul>
        <li>Your name, email address and phone number. In the fleet&apos;s records you appear as &quot;Deleted user&quot;.</li>
        <li>Your password. The account can never be signed in to again.</li>
        <li>Your sign-ins, push notification tokens and notifications.</li>
        <li>The emergency contacts you added.</li>
        <li>Your access to every fleet you belonged to.</li>
      </ul>

      <h2 id="kept">What is kept</h2>
      <ul>
        <li>
          <strong>Vehicle history, journeys and SOS records</strong> belong to the fleet and stay
          with it, without your name.
        </li>
        <li>
          <strong>Billing and payment records</strong>, for as long as Kenyan tax and accounting
          law requires.
        </li>
      </ul>
      <p>
        More about how we handle data is in our <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
