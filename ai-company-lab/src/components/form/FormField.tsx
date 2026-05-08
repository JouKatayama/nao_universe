import { cn } from '@/lib/utils'

const baseInput =
  'w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-text-muted outline-none transition-all duration-200 focus:border-accent/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-accent/20'

interface LabelProps {
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}

function Label({ htmlFor, required, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-text-secondary mb-2">
      {children}
      {required && <span className="text-accent ml-1">*</span>}
    </label>
  )
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, id, required, className, ...props }: InputProps) {
  const fieldId = id || props.name || ''
  return (
    <div>
      <Label htmlFor={fieldId} required={required}>{label}</Label>
      <input id={fieldId} required={required} className={cn(baseInput, className)} {...props} />
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export function Textarea({ label, id, required, className, ...props }: TextareaProps) {
  const fieldId = id || props.name || ''
  return (
    <div>
      <Label htmlFor={fieldId} required={required}>{label}</Label>
      <textarea
        id={fieldId}
        required={required}
        rows={5}
        className={cn(baseInput, 'resize-y min-h-[120px]', className)}
        {...props}
      />
    </div>
  )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string; label: string }[]
  placeholder?: string
}

export function Select({ label, id, required, options, placeholder, className, ...props }: SelectProps) {
  const fieldId = id || props.name || ''
  return (
    <div>
      <Label htmlFor={fieldId} required={required}>{label}</Label>
      <select
        id={fieldId}
        required={required}
        className={cn(baseInput, 'appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat', className)}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-primary-dark text-white">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

interface RadioGroupProps {
  label: string
  name: string
  options: { value: string; label: string }[]
  required?: boolean
}

export function RadioGroup({ label, name, options, required }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-text-secondary mb-3">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 cursor-pointer hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-200 has-[:checked]:border-accent/40 has-[:checked]:bg-accent/[0.06]"
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              required={required}
              className="w-4 h-4 accent-[#d4a574]"
            />
            <span className="text-sm text-text-secondary">{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
