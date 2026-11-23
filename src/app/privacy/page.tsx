import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Mail } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Wakil Fleet collects, uses, shares and protects personal data, and the rights you have under Kenya's Data Protection Act, 2019.",
  alternates: { canonical: "/privacy" },
};

const { company, email, retention } = site;

/*
 * Drafted from what the Fleet API and app actually do (Nov 2026). Check
 * with a lawyer before launch, and update this page whenever a new kind of
 * data or a new service provider is added.
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      current="/privacy"
      intro={
        <p>
          This policy explains what personal data the Wakil Fleet app and service collect, why,
          who we share it with, and the rights you have under Kenya&apos;s Data Protection Act,
          2019.
        </p>
      }
    >
      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        Wakil Fleet is provided by <strong>{company.legalName}</strong> (&quot;Wakil&quot;,
        &quot;we&quot;, &quot;us&quot;), {company.address}.
      </p>
      <p>
        For anything about your personal data, email <Mail to={email.privacy} />.
      </p>
      <p>
        A business that uses Wakil Fleet for its vehicles (the &quot;fleet&quot;) decides who it
        invites and which of its vehicles are tracked. For the data about its own drivers and
        vehicles, that business is also responsible for having a lawful reason to use it and for
        telling its drivers that their vehicle is tracked.
      </p>

      <h2 id="what-we-collect">2. What we collect</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Where it comes from</th>
              <th>Why we use it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name, phone number, email address</td>
              <td>You, or the fleet Owner or manager who invites you</td>
              <td>Creating your account, signing you in, sending invitations, codes and alerts</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>You</td>
              <td>Signing you in. We store only a one-way hash, never the password itself</td>
            </tr>
            <tr>
              <td>Your role and fleet (Owner, Manager or Driver) and which vehicle you are assigned to</td>
              <td>The fleet Owner or managers</td>
              <td>Showing each person the right information and keeping a record of who drove which vehicle</td>
            </tr>
            <tr>
              <td>Vehicle details: registration, make, model</td>
              <td>The fleet</td>
              <td>Identifying vehicles in the app</td>
            </tr>
            <tr>
              <td>Vehicle location, speed, ignition state and device alerts</td>
              <td>The tracker fitted in the vehicle</td>
              <td>Showing the fleet where its vehicles are, and including the location in an SOS</td>
            </tr>
            <tr>
              <td>Your phone&apos;s location</td>
              <td>Your phone, only if you allow it, and only when you send an SOS</td>
              <td>Telling the people alerted where you are. The app never tracks your phone in the background</td>
            </tr>
            <tr>
              <td>SOS details: who raised it, when, location, who was alerted and whether the alert was delivered</td>
              <td>The app and our systems</td>
              <td>Getting help to you, and a record of what happened</td>
            </tr>
            <tr>
              <td>Emergency contacts and outside responders (name and phone)</td>
              <td>The person who adds them</td>
              <td>Alerting them when an SOS is raised</td>
            </tr>
            <tr>
              <td>Installation records: photos of the fitted tracker, checklist and test results</td>
              <td>Wakil technicians</td>
              <td>Proving the tracker was fitted and works</td>
            </tr>
            <tr>
              <td>Billing: bills, payments, and for a saved card only its brand, last 4 digits and expiry date</td>
              <td>Our systems and our payment processor</td>
              <td>Billing the fleet and paying bills on their due date when the Owner saves a card</td>
            </tr>
            <tr>
              <td>Device information and push notification token</td>
              <td>Your phone</td>
              <td>Sending notifications to the right device, and keeping your sign-in secure</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not collect your full card number, CVV or M-Pesa PIN. We do not use advertising
        trackers, and we do not sell personal data.
      </p>

      <h2 id="legal-basis">3. Our legal basis</h2>
      <ul>
        <li>
          <strong>Contract:</strong> to provide the service the fleet signed up for, including
          accounts, tracking, SOS and billing.
        </li>
        <li>
          <strong>Legitimate interests:</strong> keeping the service secure, preventing fraud, and
          keeping records of SOS events and installations.
        </li>
        <li>
          <strong>Vital interests:</strong> sharing your location with the people alerted when an
          SOS is raised.
        </li>
        <li>
          <strong>Legal obligation:</strong> keeping billing records as tax law requires.
        </li>
        <li>
          <strong>Consent:</strong> your phone&apos;s location and push notifications. You can
          turn either off at any time in your phone&apos;s settings.
        </li>
      </ul>

      <h2 id="sharing">4. Who we share it with</h2>
      <p>Inside a fleet, the Owner and managers can see the fleet&apos;s vehicles, drivers and SOS events.</p>
      <p>
        We use these service providers, only for the purpose shown. They may only use the data to
        provide their service to us:
      </p>
      <ul>
        <li><strong>Tracksolid (Jimi IoT):</strong> the platform the vehicle trackers report through.</li>
        <li><strong>Africa&apos;s Talking:</strong> sending SMS such as codes, invitations and SOS alerts.</li>
        <li><strong>Resend:</strong> sending email.</li>
        <li><strong>Expo, Apple and Google:</strong> delivering push notifications to your phone.</li>
        <li><strong>Paystack:</strong> processing M-Pesa and card payments and storing saved cards.</li>
        <li><strong>Apple Maps and Google Maps:</strong> showing maps in the app.</li>
        <li><strong>Our hosting provider:</strong> running our servers and databases.</li>
      </ul>
      <p>
        We share data with the police or other authorities only when the law requires it, or when
        needed to protect someone&apos;s life or safety.
      </p>

      <h2 id="transfers">5. Transfers outside Kenya</h2>
      <p>
        Some of these providers process data outside Kenya. When they do, we rely on the
        safeguards required by sections 48 to 50 of the Data Protection Act, such as contractual
        protections.
      </p>

      <h2 id="retention">6. How long we keep it</h2>
      <ul>
        <li>
          Your account: while it is active. When you delete it, your name, email address and
          phone number are removed straight away, and you are signed out everywhere.
        </li>
        <li>Emergency contacts you added: removed when you delete your account.</li>
        <li>Installation photos: {retention.installationEvidenceDays} days after the installation is verified.</li>
        <li>
          Vehicle location history, journeys and SOS records: kept with the fleet they belong to.
          If you delete your account, they stay with the fleet without your name.
        </li>
        <li>Billing and payment records: for as long as Kenyan tax and accounting law requires.</li>
      </ul>

      <h2 id="security">7. How we protect it</h2>
      <p>
        Data is encrypted in transit. Passwords are stored as one-way hashes. Each fleet can only
        see its own data, and access by Wakil staff is limited to people who need it and is
        recorded.
      </p>

      <h2 id="rights">8. Your rights</h2>
      <p>Under the Data Protection Act, you have the right to:</p>
      <ul>
        <li>be told how your data is used, which is what this policy does;</li>
        <li>get a copy of your personal data;</li>
        <li>have wrong or incomplete data corrected;</li>
        <li>have your data deleted, subject to the records we must keep (see section 6);</li>
        <li>object to, or ask us to restrict, how we use it;</li>
        <li>withdraw consent at any time, for example by turning off location or notifications.</li>
      </ul>
      <p>
        To use any of these rights, email <Mail to={email.privacy} />. We reply within 7 days. To
        delete your account, see <Link href="/delete-account">Delete your account</Link>.
      </p>
      <p>
        If you are not happy with our answer, you can complain to the Office of the Data
        Protection Commissioner at{" "}
        <a href="https://www.odpc.go.ke" rel="noopener">odpc.go.ke</a>.
      </p>

      <h2 id="children">9. Children</h2>
      <p>Wakil Fleet is for businesses and their staff. It is not meant for anyone under 18.</p>

      <h2 id="changes">10. Changes to this policy</h2>
      <p>
        When we change this policy we update the date at the top. If a change is significant, we
        tell fleet Owners in the app or by email before it takes effect.
      </p>
    </LegalPage>
  );
}
