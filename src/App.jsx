
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import './App.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#', dropdown: false },
  { name: 'Qui nous sommes', href: '#', dropdown: true },
  { name: 'Nos activites', href: '#', dropdown: true },
  { name: 'Formation', href: '#', dropdown:false },
  { name: 'Contact', href: '#', dropdown: false },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/logo.png" className="h-8 w-auto" />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500">
                {item.name}
                {item.dropdown && <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 flex items-center gap-x-1 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                {item.dropdown && <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />}
                  </a>
                ))}
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div className="relative isolate" style={{backgroundImage: 'url("/bg.svg")', backgroundPosition: '27% 0%'}}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            
            <h1 className="text-white mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transformation Digitale
            </h1>
            <p className="text-white mt-6 text-lg leading-8 text-gray-600">
              Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip
              nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="hover:bg-white hover:text-blue-500 rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                En Saviour Plus
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">

                <img alt="" src="/art.png" />
          </div>
        </div>
      </div>
      </>
  )
}