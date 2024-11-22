import React from 'react'
import { FormElement } from './FormBuilder'

type PropertyEditorProps = {
  selectedElement: FormElement | null
  updateElement: (element: FormElement) => void
}

export default function PropertyEditor({ selectedElement, updateElement }: PropertyEditorProps) {
  if (!selectedElement) {
    return <div className="w-64 bg-gray-100 p-4">Select an element to edit its properties</div>
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateElement({ ...selectedElement, [e.target.name]: e.target.value })
  }

  const handleOptionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateElement({ ...selectedElement, options: e.target.value.split('\n') })
  }

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Properties</h2>
      <div className="mb-4">
        <label className="block mb-2">Label</label>
        <input
          type="text"
          name="label"
          value={selectedElement.label}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      {(selectedElement.type === 'text' || selectedElement.type === 'textarea') && (
        <div className="mb-4">
          <label className="block mb-2">Placeholder</label>
          <input
            type="text"
            name="placeholder"
            value={selectedElement.placeholder || ''}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      )}
      {(selectedElement.type === 'select' || selectedElement.type === 'radio') && (
        <div className="mb-4">
          <label className="block mb-2">Options (one per line)</label>
          <textarea
            name="options"
            value={selectedElement.options?.join('\n') || ''}
            onChange={handleOptionsChange}
            className="border p-2 rounded w-full"
            rows={5}
          />
        </div>
      )}
    </div>
  )
}

