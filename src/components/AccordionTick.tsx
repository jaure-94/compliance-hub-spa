import { Collapse } from 'react-collapse';
import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import GreenTick from "@/assets/green-tick.svg";

export const AccordionTick = ({ open, toggle, title, statement }: { open: boolean, toggle: () => void, title: string, statement: string }) => {
  return (
    <div className="pt-2 lg:max-w-lg">
        <div className="bg-white px-6 py-6 md:px-12 md:max-w-lg flex justify-between items-center cursor-pointer" onClick={toggle}>
            <div className='flex flex-row'>
                <GreenTick className="h-5 mr-2" />
                <p className="text-base font-semibold">{title}</p>
            </div>
            <div className='text-lg'>
                { open ? <FaMinus /> : <FaPlus /> }
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='text-base tracking-tight max-w-full bg-white px-12 pb-5'>{ statement }</div>
        </Collapse>
    </div>
  )
}