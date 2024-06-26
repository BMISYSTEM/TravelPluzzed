import { useState } from 'react'
import logoNAvegation from '../../../assets/LOGOS_TRAVEL_PUZZEL_2024-02-250x84.png';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const ComunityList = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const NavegationList = [
  { name: 'Inicio', href: '#', classnamefull: 'text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900' ,
     classNameSmall: '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50'
    },
  { name: 'Destinos', href: '#', classnamefull: 'text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900',
    classNameSmall: '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50'
   },
  { name: 'Experiencias', href: '#', classnamefull: 'text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900',
    classNameSmall: '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50'
   },
  { name: 'Trasportes', href: '#', classnamefull: 'text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900',
    classNameSmall: '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50'
   },
]



type  ItemNavegationProps = {
  className: string
  href: string
  name: string
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ItemNavegation = ({className, href, name}: ItemNavegationProps) => {
  return (
    <a href={href} className={className}>
      {name}
    </a>
  )
}


const  Navegation  = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.3)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo TravelPluzz</span>
            <img className="h-8 w-auto" src={logoNAvegation}alt="Logo de TravelPluzz"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          
           {
            NavegationList.map((item) => (
              <ItemNavegation
                key={item.name}
                href={item.href}
                name={item.name}
                className={item.classnamefull}
              />
            ))
           }
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900">
              Comunidad
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {ComunityList.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900">
            Coctacto
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-5">
          <a href="#" className="text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900">
            Mi cuenta <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-blue-700 hover:text-blue-900">
             <ShoppingCartIcon className='h-6 w-6 text-blue-700 hover:text-blue-900 group-hover:text-indigo-600'/>
          </a>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo TravelPluzz</span>
              <img
                className="h-8 w-auto"
                src={logoNAvegation}
                alt="Logo de TravelPluzz"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              {
                NavegationList.map((item) => (
                  <ItemNavegation
                    key={item.name}
                    href={item.href}
                    name={item.name}
                    className={item.classNameSmall}
                  />
                ))
              }
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50">
                      Comunidad
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '','h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-700 hover:text-blue-900 hover:bg-gray-50 space-x-3"
                >
                  Mi cuenta
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <ShoppingCartIcon className='h-6 w-6 text-blue-700 hover:text-blue-900 group-hover:text-indigo-600'/>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}



export const HeaderLayout = () => {
    
  return (
    <header className='w-full'>
        <Navegation />
    </header>
  )
}


