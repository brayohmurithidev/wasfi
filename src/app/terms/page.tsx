import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Mail } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that apply when a business and its people use Wakil Fleet.",
  alternates: { canonical: "/terms" },
};

const { company, email } = site;

/* Draft. Check with a lawyer before launch. */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      current="/terms"
      intro={
        <p>
          These terms apply when a business uses Wakil Fleet for its vehicles, and when its
          owners, managers and drivers use the app.
        </p>
      }
    >
      <h2 id="agreement">1. The agreement</h2>
      <p>
        Wakil Fleet is provided by <strong>{company.legalName}</strong>, {company.address}{" "}
        (&quot;Wakil&quot;, &quot;we&quot;). By creating an account or using the app you accept
        these terms. If you use Wakil Fleet for a business, you accept them on behalf of that
        business and confirm you are allowed to. You must be at least 18.
      </p>

      <h2 id="service">2. The service</h2>
      <p>
        Wakil Fleet shows the location and status of vehicles fitted with a tracker installed by
        Wakil, lets a fleet manage its drivers and team, and sends SOS alerts. Features may change
        as we improve the service. We tell Owners in advance about changes that remove something
        they rely on.
      </p>

      <h2 id="accounts">3. Accounts and roles</h2>
      <ul>
        <li>
          Each fleet has one <strong>Owner</strong>, who is responsible for the account, its bills,
          and who is invited.
        </li>
        <li><strong>Managers</strong> help run the fleet with the access the app gives them.</li>
        <li><strong>Drivers</strong> use the app for the vehicles they are assigned to.</li>
        <li>Keep your password private. Tell us at once if you think someone else has used your account.</li>
      </ul>

      <h2 id="fleet-duties">4. The fleet&apos;s responsibilities</h2>
      <ul>
        <li>Track only vehicles the fleet owns or is allowed to track.</li>
        <li>
          Tell drivers and anyone else who uses a tracked vehicle that it is tracked, and have a
          lawful reason under the Data Protection Act, 2019 for doing so.
        </li>
        <li>Give correct details for people you invite and responders you add, and have their agreement to be contacted.</li>
        <li>Do not tamper with or remove a tracker, or try to access another fleet&apos;s data.</li>
      </ul>

      <h2 id="installation">5. Trackers and installation</h2>
      <p>
        Trackers are fitted and tested by Wakil technicians. A vehicle goes live after its
        installation is verified. Who owns the tracker hardware, and what happens to it when
        service ends, is set out in the fleet&apos;s service agreement with Wakil.
      </p>

      <h2 id="billing">6. Billing and payment</h2>
      <ul>
        <li>Billing is monthly, per active vehicle, at the price in effect on the first day of each billing period.</li>
        <li>Each bill is due 7 days after it is issued. The Owner pays in the app by M-Pesa or card, through Paystack.</li>
        <li>
          If the Owner saves a card, it is charged for each bill on its due date. If a charge
          fails, we try again 2 and 5 days later and tell the Owner. The Owner can change or
          remove the card at any time.
        </li>
        <li>To check a new card, Paystack charges KES 10 and refunds it straight away.</li>
        <li>
          If a bill stays unpaid, we may suspend the fleet&apos;s account until it is paid.{" "}
          <strong>SOS keeps working while an account is suspended.</strong>
        </li>
        <li>Prices are in Kenya shillings. We give Owners notice before a price change, and a change never applies to a bill already issued.</li>
      </ul>

      <h2 id="sos">7. SOS is not an emergency service</h2>
      <p>
        SOS alerts the people the fleet has chosen, by SMS, email and notification. It is not a
        replacement for the police, an ambulance or other emergency services. Alerts depend on
        mobile networks, the phone and the tracker, and can be delayed or fail. In an emergency,
        also call <strong>999</strong> or <strong>112</strong>.
      </p>

      <h2 id="accuracy">8. Accuracy and availability</h2>
      <p>
        Vehicle positions come from GPS and mobile networks and can be delayed, missing or
        inaccurate, for example underground, in poor coverage, or when a tracker loses power. We
        work to keep the service running, but cannot promise it will be available without
        interruption.
      </p>

      <h2 id="liability">9. Liability</h2>
      <p>
        To the extent the law allows, Wakil is not liable for indirect or consequential loss, or
        for loss caused by inaccurate or delayed location data or alerts. Our total liability for
        any claim is limited to the amount the fleet paid us in the 3 months before the claim.
        Nothing in these terms limits liability that cannot be limited under Kenyan law,
        including under the Consumer Protection Act, 2012.
      </p>

      <h2 id="privacy">10. Privacy</h2>
      <p>
        How we handle personal data is explained in our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>

      <h2 id="ending">11. Ending the service</h2>
      <p>
        An Owner can end the fleet&apos;s service by contacting us. Any user can delete their own
        account: see <Link href="/delete-account">Delete your account</Link>. We may suspend or
        close an account that breaks these terms, after telling the Owner where we can.
      </p>

      <h2 id="law">12. Governing law</h2>
      <p>
        These terms are governed by the laws of Kenya. Disputes go to the courts of Kenya, after
        we have first tried to settle them with you in good faith.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        Questions about these terms: <Mail to={email.support} />.
      </p>
    </LegalPage>
  );
}
