'use client'

import { useFormState } from 'react-dom'
import { submitContactForm, type FormState } from '@/lib/actions'
import { Input, Textarea } from './FormField'
import { SubmitButton } from './SubmitButton'
import { FormMessage } from './FormMessage'

interface ContactFormProps {
  formType: string
  fields: {
    organization?: { label: string; placeholder: string }
    phone?: boolean
  }
}

export function ContactForm({ formType, fields }: ContactFormProps) {
  const [state, action] = useFormState(submitContactForm, null)

  if (state?.success) {
    return (
      <div className="gradient-border rounded-2xl bg-white/[0.02] p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">送信完了</h3>
        <p className="text-text-secondary leading-relaxed">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="gradient-border rounded-2xl bg-white/[0.02] p-8 md:p-10">
      <input type="hidden" name="formType" value={formType} />

      <div className="space-y-6">
        {fields.organization && (
          <Input
            label={fields.organization.label}
            name="organization"
            required
            placeholder={fields.organization.placeholder}
          />
        )}

        <Input label="ご担当者名" name="name" required placeholder="山田 太郎" />

        <Input label="メールアドレス" name="email" type="email" required placeholder="example@mail.com" />

        {fields.phone && (
          <Input label="電話番号（任意）" name="phone" type="tel" placeholder="03-1234-5678" />
        )}

        <Textarea
          label="お問い合わせ内容"
          name="message"
          required
          placeholder="ご相談内容をご記入ください。"
        />
      </div>

      <FormMessage state={state} />

      <div className="mt-8">
        <SubmitButton className="w-full">送信する</SubmitButton>
      </div>

      <p className="text-text-muted text-xs mt-4 text-center">
        送信された情報は本プロジェクトの運営目的にのみ使用されます。
      </p>
    </form>
  )
}
