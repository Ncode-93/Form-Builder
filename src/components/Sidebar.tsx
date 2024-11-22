// import React from 'react'
// import { FormElement } from './FormBuilder'

// const elementTypes = [
//   { type: 'text', label: 'Text Input' },
//   { type: 'textarea', label: 'Text Area' },
//   { type: 'select', label: 'Select' },
//   { type: 'checkbox', label: 'Checkbox' },
//   { type: 'radio', label: 'Radio' },
// ]

// type SidebarProps = {
//   addElement: (element: FormElement) => void
// }

// export default function Sidebar({ addElement }: SidebarProps) {      
//   const onDragStart = (e: React.DragEvent, type: string) => {
//     e.dataTransfer.setData('text/plain', type)
//   }

//   return (
//     <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
//       <h2 className="text-lg font-semibold mb-4">Form Elements</h2>
//       {elementTypes.map((element) => (
//         <div
//           key={element.type}
//           draggable
//           onDragStart={(e) => onDragStart(e, element.type)}
//           className="bg-white p-2 mb-2 rounded cursor-move hover:bg-gray-50"
//         >
//           {element.label}
//         </div>
//       ))}
//     </div>
//   )
// }

import React from 'react'
import { FormElement } from './FormBuilder'

const elementTypes = [
  { type: 'text', label: 'Text Input' },
  { type: 'textarea', label: 'Text Area' },
  { type: 'select', label: 'Select' },
  { type: 'checkbox', label: 'Checkbox' },
  { type: 'radio', label: 'Radio' },
]

type SidebarProps = {
  addElement: (element: FormElement) => void
}

export default function Sidebar({ addElement }: SidebarProps) {
  const onDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData('text/plain', type)
  }

  const handleAddElement = (type: string) => {
    const newElement: FormElement = {
      id: Date.now().toString(),
      type,
      label: `New ${type} element`,
    }
    addElement(newElement)
  }

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Form Elements</h2>
      {elementTypes.map((element) => (
        <div
          key={element.type}
          draggable
          onDragStart={(e) => onDragStart(e, element.type)}
          onClick={() => handleAddElement(element.type)}
          className="bg-white p-2 mb-2 rounded cursor-pointer hover:bg-gray-50"
        >
          {element.label}
        </div>
      ))}
    </div>
  )
}

