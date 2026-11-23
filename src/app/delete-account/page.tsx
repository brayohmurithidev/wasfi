import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Mail } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to delete your Wakil Fleet account, what is deleted, and what we must keep.",
  alternates: { canonical: "/delete-account" },
};

const { email, retention } = site;

/*
 * Google Play's account deletion link. Until in-app deletion ships, this is
 * a request by email. When the app gains "Delete account", add it as the
 * first way below.
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
      intro={<p>You can ask us to delete your Wakil Fleet account and the personal data linked to it at any time.</p>}
    >
      <h2 id="how">How to ask</h2>
      <ol>
        <li>
          Email <Mail to={email.privacy} /> from the email address on your account, or include the
          phone number on your account.
        </li>
        <li>Tell us your name and the fleet you belong to.</li>
        <li>
          We confirm the request is really from you, usually with a code sent to your phone, and
          then delete the account within {retention.afterDeletionDays} days.
        </li>
      </ol>
      <p>
        <a
          href={`mailto:${email.privacy}?subject=${subject}&body=${body}`}
          className="not-prose inline-block rounded-full bg-ink px-6 py-3 font-semibold text-on-ink no-underline"
          style={{ color: "var(--color-on-ink)", textDecoration: "none" }}
        >
          Email a deletion request
        </a>
      </p>

      <h2 id="owners">If you are a fleet Owner</h2>
      <p>
        Deleting the Owner&apos;s account also ends the fleet&apos;s service. Any unpaid bills
        stay due. Tell us in your email if someone else in the fleet should take over as Owner
        instead.
      </p>
      <p>
        If you are a driver or manager, your fleet&apos;s Owner can also remove you from the
        fleet in the app. That stops your access to the fleet but does not delete your account.
      </p>

      <h2 id="deleted">What we delete</h2>
      <ul>
        <li>Your name, phone number, email address and password.</li>
        <li>Your sign-ins, devices and push notification tokens.</li>
        <li>Emergency contacts you added.</li>
        <li>For an Owner: the saved payment card. We also ask Paystack to disable it.</li>
      </ul>

      <h2 id="kept">What we keep, and for how long</h2>
      <ul>
        <li>
          <strong>Billing and payment records</strong>, for as long as Kenyan tax and accounting
          law requires.
        </li>
        <li>
          <strong>SOS records</strong>, for {retention.sosMonths} months after the incident, so
          that any dispute about it can be resolved. Your name in them is replaced with
          &quot;Deleted user&quot;.
        </li>
        <li>
          <strong>Vehicle and trip data</strong> belongs to the fleet, not to you, and stays with
          the fleet. Records of which vehicle you drove are kept without your name.
        </li>
      </ul>
      <p>
        More about how we handle data is in our <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
