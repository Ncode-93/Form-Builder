// "use client"

// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Canvas from './Canvas'
// import PropertyEditor from './PropertyEditor'

// export type FormElement = {
//   id: string
//   type: string
//   label: string
//   placeholder?: string
//   options?: string[]
// }

// export default function FormBuilder() {
//   const [formElements, setFormElements] = useState<FormElement[]>([])
//   const [selectedElement, setSelectedElement] = useState<FormElement | null>(null)

//   const addElement = (element: FormElement) => {
//     setFormElements([...formElements, element])
//   }

//   const updateElement = (updatedElement: FormElement) => {
//     setFormElements(formElements.map(el => el.id === updatedElement.id ? updatedElement : el))
//     setSelectedElement(updatedElement)
//   }

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar addElement={addElement} />
//       <Canvas 
//         formElements={formElements} 
//         setFormElements={setFormElements}
//         setSelectedElement={setSelectedElement}
//       />
//       <PropertyEditor 
//         selectedElement={selectedElement} 
//         updateElement={updateElement}
//       />
//     </div>
//   )
// }




// IT-1

// "use client"

// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Canvas from './Canvas'
// import PropertyEditor from './PropertyEditor'

// export type FormElement = {
//   id: string
//   type: string
//   label: string
//   placeholder?: string
//   options?: string[]
// }

// export default function FormBuilder() {
//   const [formElements, setFormElements] = useState<FormElement[]>([])
//   const [selectedElement, setSelectedElement] = useState<FormElement | null>(null)

//   const addElement = (element: FormElement) => {
//     setFormElements([...formElements, element])
//   }

//   const updateElement = (updatedElement: FormElement) => {
//     setFormElements(formElements.map(el => el.id === updatedElement.id ? updatedElement : el))
//     setSelectedElement(updatedElement)
//   }

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar addElement={addElement} />
//       <Canvas 
//         formElements={formElements} 
//         setFormElements={setFormElements}
//         selectedElement={selectedElement} 
//         setSelectedElement={setSelectedElement}
//       />
//       <PropertyEditor 
//         selectedElement={selectedElement} 
//         updateElement={updateElement}
//       />
//     </div>
//   )
// }  



"use client"

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Canvas from './Canvas'
import PropertyEditor from './PropertyEditor'

export type FormElement = {
  id: string
  type: string
  label: string
  placeholder?: string
  options?: string[]
}

export default function FormBuilder() {
  const [formElements, setFormElements] = useState<FormElement[]>([])
  const [selectedElement, setSelectedElement] = useState<FormElement | null>(null)

  const addElement = (element: FormElement) => {
    setFormElements([...formElements, element])
  }

  const updateElement = (updatedElement: FormElement) => {
    setFormElements(formElements.map(el => el.id === updatedElement.id ? updatedElement : el))
    setSelectedElement(updatedElement)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar addElement={addElement} /> {/* Pass addElement */}
      <Canvas 
        formElements={formElements} 
        setFormElements={setFormElements}
        selectedElement={selectedElement} 
        setSelectedElement={setSelectedElement}
      />
      <PropertyEditor 
        selectedElement={selectedElement} 
        updateElement={updateElement}
      />
    </div>
  )
}
