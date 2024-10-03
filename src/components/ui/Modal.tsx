import {  Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react'
interface IProps{
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
  }
export default function Modal({isOpen,close,title,children}:IProps) {


  return (
    <>
   

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl  bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
         {title &&      <DialogTitle as="h3" className="text-base/7 font-medium pb-2">
               {title}
              </DialogTitle>}
              <div>{children }</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
