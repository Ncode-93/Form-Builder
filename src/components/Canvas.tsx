// import React from 'react'
// import { FormElement } from './FormBuilder'
// import FormElementComponent from './FormElement'

// type CanvasProps = {
//   formElements: FormElement[]
//   setFormElements: React.Dispatch<React.SetStateAction<FormElement[]>>
//   setSelectedElement: React.Dispatch<React.SetStateAction<FormElement | null>>
// }

// export default function Canvas({ formElements, setFormElements, setSelectedElement }: CanvasProps) {
//   const onDragOver = (e: React.DragEvent) => {
//     e.preventDefault()
//   }

//   const onDrop = (e: React.DragEvent) => {
//     e.preventDefault()
//     const type = e.dataTransfer.getData('text/plain')
//     const newElement: FormElement = {
//       id: Date.now().toString(),
//       type,
//       label: `New ${type} element`,
//     }
//     setFormElements([...formElements, newElement])
//   }

//   const moveElement = (index: number, direction: 'up' | 'down') => {
//     const newElements = [...formElements];
//     if (direction === 'up' && index > 0) {
//       [newElements[index - 1], newElements[index]] = [newElements[index], newElements[index - 1]];
//     } else if (direction === 'down' && index < newElements.length - 1) {
//       [newElements[index], newElements[index + 1]] = [newElements[index + 1], newElements[index]];
//     }
//     setFormElements(newElements);
//   }

//   return (
//     <div 
//       className="flex-1 p-4 bg-gray-50 overflow-y-auto"
//       onDragOver={onDragOver}
//       onDrop={onDrop}
//     >
//       {formElements.map((element, index) => (
//         <FormElementComponent
//           key={element.id}
//           element={element}
//           onClick={() => setSelectedElement(element)}
//           onDelete={() => {
//             const newElements = formElements.filter(el => el.id !== element.id);
//             setFormElements(newElements);
//             if (selectedElement && selectedElement.id === element.id) {
//               setSelectedElement(null);
//             }
//           }}
//           onMoveUp={() => moveElement(index, 'up')}
//           onMoveDown={() => moveElement(index, 'down')}
//         />
//       ))}
//     </div>
//   )
// }

import React from 'react'
import { FormElement } from './FormBuilder'
import FormElementComponent from './FormElement'

type CanvasProps = {
  formElements: FormElement[]
  setFormElements: React.Dispatch<React.SetStateAction<FormElement[]>>
  selectedElement: FormElement | null
  setSelectedElement: React.Dispatch<React.SetStateAction<FormElement | null>>
}

export default function Canvas({
  formElements,
  setFormElements,
  selectedElement,
  setSelectedElement,
}: CanvasProps) {
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const type = e.dataTransfer.getData('text/plain')
    const newElement: FormElement = {
      id: Date.now().toString(),
      type,
      label: `New ${type} element`,
    }
    setFormElements([...formElements, newElement])
  }

  const moveElement = (index: number, direction: 'up' | 'down') => {
    const newElements = [...formElements];
    if (direction === 'up' && index > 0) {
      [newElements[index - 1], newElements[index]] = [newElements[index], newElements[index - 1]];
    } else if (direction === 'down' && index < newElements.length - 1) {
      [newElements[index], newElements[index + 1]] = [newElements[index + 1], newElements[index]];
    }
    setFormElements(newElements);
  }

  return (
    <div 
      className="flex-1 p-4 bg-gray-50 overflow-y-auto"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {formElements.map((element, index) => (
        <FormElementComponent
          key={element.id}
          element={element}
          onClick={() => setSelectedElement(element)}
          onDelete={() => {
            const newElements = formElements.filter(el => el.id !== element.id);
            setFormElements(newElements);
            if (selectedElement && selectedElement.id === element.id) {
              setSelectedElement(null);
            }
          }}
          onMoveUp={() => moveElement(index, 'up')}
          onMoveDown={() => moveElement(index, 'down')}
        />
      ))}
    </div>
  )
}
