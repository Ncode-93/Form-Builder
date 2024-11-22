import React from 'react'
import { FormElement } from './FormBuilder'
import { Trash, ChevronUp, ChevronDown } from 'lucide-react'

type FormElementProps = {
  element: FormElement
  onClick: () => void
  onDelete: () => void
  onMoveUp: () => void
  onMoveDown: () => void
}

export default function FormElementComponent({ element, onClick, onDelete, onMoveUp, onMoveDown }: FormElementProps) {
  const renderElement = () => {
    switch (element.type) {
      case 'text':
        return <input type="text" placeholder={element.placeholder} className="border p-2 rounded w-full" />
      case 'textarea':
        return <textarea placeholder={element.placeholder} className="border p-2 rounded w-full" />
      case 'select':
        return (
          <select className="border p-2 rounded w-full">
            {element.options?.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        )
      case 'checkbox':
        return <input type="checkbox" className="mr-2" />
      case 'radio':
        return (
          <div>
            {element.options?.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="radio" id={`${element.id}-${index}`} name={element.id} className="mr-2" />
                <label htmlFor={`${element.id}-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div 
      className="mb-4 p-2 border rounded cursor-pointer bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors duration-300" 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">{element.label}</label>
        <div className="flex items-center space-x-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onMoveUp(); }} 
            className="p-1 hover:bg-gray-200 rounded"
            aria-label="Move element up"
          >
            <ChevronUp size={16} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onMoveDown(); }} 
            className="p-1 hover:bg-gray-200 rounded"
            aria-label="Move element down"
          >
            <ChevronDown size={16} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(); }} 
            className="p-1 bg-red-100 hover:bg-red-200 rounded"
            aria-label="Delete element"
          >
            <Trash size={16} color="red" />
          </button>
        </div>
      </div>
      {element.type === 'radio' ? (
        renderElement()
      ) : (
        <div className="mt-1">{renderElement()}</div>
      )}
    </div>
  )
}

