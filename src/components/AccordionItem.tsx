import { Collapse } from 'react-collapse';
import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import BlackBulletPoint from "@/assets/black-bullet-point.svg";

export const AccordionItem = ({ open, toggle, title, statement }: { open: boolean, toggle: () => void, title: string, statement: string }) => {
  return (
    <div className="pt-2">
        <div className="bg-white px-4 py-6 md:px-12 flex justify-between items-center cursor-pointer" onClick={toggle}>
            <div className='flex flex-row'>
                <BlackBulletPoint className="h-5 mr-2 min-h-5 min-w-5" />
                <p className="text-base font-semibold">{title}</p>
            </div>
            <div className='text-lg'>
                { open ? <FaMinus /> : <FaPlus /> }
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='text-base tracking-tight bg-white px-12 pb-5'>{ statement }</div>
        </Collapse>
    </div>
  )
}
