'use client'

import { useFormState } from 'react-dom'
import { submitJoinForm, type FormState } from '@/lib/actions'
import { Input, Select, Textarea, RadioGroup } from './FormField'
import { SubmitButton } from './SubmitButton'
import { FormMessage } from './FormMessage'

const ATTRIBUTES = [
  { value: '大学生', label: '大学生' },
  { value: '大学院生', label: '大学院生' },
  { value: '社会人(1-3年目)', label: '社会人（1〜3年目）' },
  { value: '社会人(4年目以上)', label: '社会人（4年目以上）' },
  { value: 'その他', label: 'その他' },
]

interface JoinFormProps {
  dates?: { value: string; label: string }[]
}

export function JoinForm({ dates }: JoinFormProps) {
  const [state, action] = useFormState(submitJoinForm, null)

  if (state?.success) {
    return (
      <div className="gradient-border rounded-2xl bg-white/[0.02] p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">お申し込みを受け付けました</h3>
        <p className="text-text-secondary leading-relaxed">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="gradient-border rounded-2xl bg-white/[0.02] p-8 md:p-10">
      <h3 className="text-lg font-semibold text-white mb-8">申込フォーム</h3>

      <div className="space-y-6">
        <Input label="お名前" name="name" required placeholder="山田 太郎" />

        <Input label="メールアドレス" name="email" type="email" required placeholder="example@mail.com" />

        <RadioGroup label="属性" name="attribute" options={ATTRIBUTES} required />

        {dates && dates.length > 0 && (
          <Select
            label="参加希望日"
            name="preferredDate"
            options={dates}
            placeholder="日程を選択してください"
          />
        )}

        <Textarea
          label="ひとこと（任意）"
          name="message"
          placeholder="参加動機や聞いてみたいことなど、ご自由にお書きください。"
        />
      </div>

      <FormMessage state={state} />

      <div className="mt-8">
        <SubmitButton className="w-full">申し込む</SubmitButton>
      </div>

      <p className="text-text-muted text-xs mt-4 text-center">
        送信された情報は本プロジェクトの運営目的にのみ使用されます。
      </p>
    </form>
  )
}
