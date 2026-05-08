'use server'

import fs from 'fs'
import path from 'path'

export type FormState = {
  success: boolean
  message: string
} | null

function saveSubmission(type: string, data: Record<string, string>) {
  const dir = path.join(process.cwd(), 'submissions')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const filename = `${type}-${Date.now()}.json`
  const payload = { ...data, submittedAt: new Date().toISOString(), type }
  fs.writeFileSync(path.join(dir, filename), JSON.stringify(payload, null, 2), 'utf-8')
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getStr(formData: FormData, key: string): string {
  return (formData.get(key) as string | null)?.trim() ?? ''
}

export async function submitJoinForm(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = getStr(formData, 'name')
  const email = getStr(formData, 'email')
  const attribute = getStr(formData, 'attribute')
  const preferredDate = getStr(formData, 'preferredDate')
  const message = getStr(formData, 'message')

  if (!name || !email || !attribute) {
    return { success: false, message: '必須項目を入力してください。' }
  }
  if (!validateEmail(email)) {
    return { success: false, message: 'メールアドレスの形式が正しくありません。' }
  }

  try {
    saveSubmission('join', { name, email, attribute, preferredDate, message })
    return { success: true, message: 'お申し込みありがとうございます。確認メールをお送りしますので、しばらくお待ちください。' }
  } catch {
    return { success: false, message: '送信に失敗しました。時間をおいて再度お試しください。' }
  }
}

export async function submitContactForm(_prev: FormState, formData: FormData): Promise<FormState> {
  const type = getStr(formData, 'formType')
  const organization = getStr(formData, 'organization')
  const name = getStr(formData, 'name')
  const email = getStr(formData, 'email')
  const phone = getStr(formData, 'phone')
  const message = getStr(formData, 'message')

  if (!name || !email || !message) {
    return { success: false, message: '必須項目を入力してください。' }
  }
  if (!validateEmail(email)) {
    return { success: false, message: 'メールアドレスの形式が正しくありません。' }
  }

  try {
    saveSubmission(type || 'contact', { organization, name, email, phone, message })
    return { success: true, message: 'お問い合わせありがとうございます。内容を確認のうえ、折り返しご連絡いたします。' }
  } catch {
    return { success: false, message: '送信に失敗しました。時間をおいて再度お試しください。' }
  }
}
