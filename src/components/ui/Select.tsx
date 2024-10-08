'use client'


import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { categories } from '../../data'
import { ICategory } from '../../interface'

interface IProps{
  selected: {name:string,imageUrl:string};
  setSelected: (category:ICategory) => void;
}



export default function Select({selected,setSelected}:IProps) {
  

  return (
    <Listbox value={selected} onChange={setSelected}>
    <Label className="inline-block mb-0">Product Category</Label> {/* Changed block to inline-block and removed unnecessary padding/margin */}
    <div className="relative mt-0"> {/* Ensure there's no margin between the label and the select button */}
      <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-blue-500 sm:text-sm">
        <span className="flex items-center">
          <img alt="" src={selected.imageUrl} className="h-5 w-5 flex-shrink-0 rounded-full" />
          <span className="ml-3 block truncate">{selected.name}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </span>
      </ListboxButton>
  
      <ListboxOptions
        transition
        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        {categories.map((category) => (
          <ListboxOption
            key={category.id}
            value={category}
            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
          >
            <div className="flex items-center">
              <img alt="" src={category.imageUrl} className="h-5 w-5 flex-shrink-0 rounded-full" />
              <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                {category.name}
              </span>
            </div>
  
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
              <CheckIcon aria-hidden="true" className="h-5 w-5" />
            </span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </div>
  </Listbox>
  
  )
}
