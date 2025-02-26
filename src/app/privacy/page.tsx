import { FC } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/ch-logo-mid.png'

type Props = {}

const page: FC = (props: Props) => {
  return (
    <main className="container text-sm">
      <div className="flex flex-col py-10 gap-5">
        <div className="flex justify-center">
          <Image src={logo} alt="Compliance Hub Logo" className="h-48 w-auto" />
        </div>

        <Button
          variant="text"
          iconBefore={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          }>
          <Link className="text-xs" href="/">Back To Home</Link>
        </Button>

        <h1 className="text-2xl font-bold">Privacy Policy</h1>

        <p>
          Compliance Hub  ("we" or "us") is committed to protecting the privacy of all users ("you" or "your") of our website,
          www.compliancehuborg.uk  ("Site"). This Privacy Notice explains how we collect, use, share, and store your personal
          information, and your rights regarding that information.
        </p>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold">1. Contact Information</h2>
          <ul>
            <li><span className="font-bold">Name:</span> Compliance Hub</li>
            <li><span className="font-bold">Email:</span> info@compliancehuborg.uk</li>
            <li><span className="font-bold">Address:</span> 9 Jones Way, Banbury, OX16 1HT</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold">2. Information We Collect</h2>
          <p>We collect the following personal information from you:</p>
          <ul className="!list-disc flex flex-col gap-2 pl-5">
            <li><span className="font-bold">Contact Information:</span> Name, email address, phone number, mailing address (collected when you register, donate, or contact us).</li>
            <li><span className="font-bold">Website Usage:</span> : Information collected automatically through cookies about your browsing activity (browser type, operating system, internet service provider).</li>
            <li><span className="font-bold">Voluntary Information:</span> Details you provide when registering for services, making donations, or contacting us. This may include information about your religious beliefs (considered "special category data" under UK GDPR).</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul className="!list-disc flex flex-col gap-2 pl-5">
            <li><span className="font-bold">To operate the Site:</span> To deliver content, process donations, and to run and operate our Site. We may need your information to display content on the Site correctly.</li>
            <li><span className="font-bold">To improve the Site:</span> To analyse website usage data and personalise your experience. We may use feedback you provide to improve our products and services.</li>
            <li><span className="font-bold">To send periodic emails: With your consent:</span> We may use the email address or contact number if provided to provide news, updates, and information about events and to respond to their inquiries, questions, and/or other requests.</li>
            <li><span className="font-bold">To comply with legal obligations:</span> As required by law or regulation.</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">4. Legal Basis for Processing</h2>
          <p>We process your information based on the following legal grounds:</p>
          <ul className="!list-disc flex flex-col gap-2 pl-5">
            <li><span className="font-bold">Consent:</span> For marketing communications and any use of "special category data" (religious beliefs).</li>
            <li><span className="font-bold">Contract:</span> To fulfil our obligations when you register for a service, event or make a donation.</li>
            <li><span className="font-bold">Legitimate Interests:</span> To operate the Site, analyse website usage, and improve our services.</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">5. Sharing Your Data</h2>
          <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic
            aggregated demographic information not linked to any personal identification information regarding visitors
            and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
          </p>
          <p>We will never sell or rent your personal information to third parties. Users may find advertising or other
            content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors,
            licensors and other third parties. We do not control the content or links that appear on these sites and are
            not responsible for the practices employed by websites linked to or from our Site. In addition, these sites
            or services, including their content and links, may be constantly changing. These sites and services may have
            their own privacy policies and customer service policies. Browsing and interaction on any other website,
            including websites which have a link to our Site, is subject to that website's own terms and policies.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold">6. Your Rights</h2>
          <p>Under the UK GDPR, you have the following rights:</p>
          <ul className="!list-disc flex flex-col gap-2 pl-5">
            <li><span className="font-bold">Right to access your data</span></li>
            <li><span className="font-bold">Right to rectification (correction of inaccurate data)</span></li>
            <li><span className="font-bold">Right to erasure (deletion of data)</span></li>
            <li><span className="font-bold">Right to restrict processing</span></li>
            <li><span className="font-bold">Right to data portability (receiving data in a structured format)</span></li>
            <li><span className="font-bold">Right to object to processing</span></li>
          </ul>
          <p>For more information on these rights, please see the Information Commissioner's Office website: <Link href="https://ico.org.uk/" className="text-blue-700 underline">ico.org.uk</Link></p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">7. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected,
            or as required by law. We then securely delete it.
          </p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">8. Security</h2>
          <p>We take reasonable steps to protect your personal information from unauthorised access, disclosure, alteration,
            or destruction. This includes using appropriate security measures on our systems and databases.
          </p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">9. Children's Privacy</h2>
          <p>Our Site is not directed to children under 13. We do not knowingly collect personal information from children
            under 13. If you are a parent or guardian and you believe your child has provided us with personal information,
            please contact us.
          </p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">10. Cookies</h2>
          <p>We use cookies to enhance your experience on our Site. You can choose to set your web browser to refuse cookies,
            but this may affect your ability to use some features of the Site.
          </p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">11. Changes to This Notice</h2>
          <p>We may update this Privacy Notice from time to time. We will post a notification on the main page of our Site
            when we make significant changes.
          </p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">12. Your Acceptance of These Terms</h2>
          <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do
            not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed
            your acceptance of those changes.
          </p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">13. Contact Us</h2>
          <p>If you have any questions about this Privacy Notice or your privacy rights, please contact us via the information
            provided above.
          </p>
        </div>

        <hr className="border-[0.5px] border-gray-300 w-full mt-10" />

        <div className="flex justify-center text-center">
          <p className="text-xs text-gray-600 mb-1 justify-center">&copy; 2025 Compliance Hub Inc. All rights reserved. Company Number 15999585. VAT Number 477880139</p>
        </div>
      </div>
    </main>
  )
}

export default page