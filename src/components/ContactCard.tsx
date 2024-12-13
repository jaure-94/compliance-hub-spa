import QRCode from "@/assets/ch-site-qr-code.jpeg";
import Image from "next/image";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ContactCard = ({ phone, email }: { phone: string, email: string }) => {
  return (
    <div className='flex flex-col items-center sm:mt-10 lg:mt-0 h-fit p-5 md:px-10 md:pt-5 md:pb-10 bg-gray-100 border-[3px] border-solid border-gray-400 rounded-md shadow-[0+4px_14px_#9ca3af]'>
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex flex-row items-center justify-center gap-2">
          <FaPhoneSquareAlt className="h-5 w-5" />
          <h3 className="text-lg font-medium">Phone</h3>
        </div>
        <p className="text-base tracking-normal ">{ phone }</p>
      </div>
      
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex flex-row items-center justify-center gap-2">
          <MdEmail className="h-6 w-6" />
          <h3 className="text-lg font-medium">Email</h3>
        </div>
        <p className="text-base tracking-normal ">{ email }</p>
      </div>

      <div className="qr-code my-12 lg:mt-8 lg:mb-3">
        <Image src={QRCode} alt="Webstite QR Code" className="h-52 w-52" />
      </div>
    </div>
  )
}
