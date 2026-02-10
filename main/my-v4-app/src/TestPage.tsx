import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useActionState } from 'react'

// 模擬一個非同步的 API Action (React 19 特性)
async function subscribeAction(_: any, formData: FormData) {
  const email = formData.get('email')
  // 模擬網路延遲
  await new Promise((res) => setTimeout(res, 1000))

  if (!email || !email.toString().includes('@')) {
    return { error: '請輸入正確的 Email 地址' }
  }

  return { success: `感謝訂閱！${email} 已加入名單。` }
}

export default function TestPage() {
  // React 19 的 useActionState
  const [state, formAction, isPending] = useActionState(subscribeAction, null)
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-zinc-50 p-4 dark:bg-zinc-950">
      <Card className="w-full max-w-md shadow-xl transition-all hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            React 19 + v4 測試
          </CardTitle>
          <CardDescription>
            如果看到漂亮的卡片與按鈕，代表 shadcn 與 Tailwind v4 運作正常。
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                required
                className="focus-visible:ring-zinc-400"
              />
            </div>

            {state?.error && (
              <p className="text-destructive text-sm font-medium">
                {state.error}
              </p>
            )}
            {state?.success && (
              <p className="text-sm font-medium text-emerald-600">
                {state.success}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? '處理中...' : '立即訂閱'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <div className="text-xs text-zinc-500">核心技術棧驗證：</div>
          <div className="flex flex-wrap gap-2">
            <Badge text="React 19" color="bg-blue-100 text-blue-700" />
            <Badge text="Tailwind v4" color="bg-pink-100 text-pink-700" />
            <Badge text="pnpm" color="bg-yellow-100 text-yellow-700" />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

// 一個簡單的內部元件，用來測試 Tailwind v4 的 Utility Classes
function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${color}`}
    >
      {text}
    </span>
  )
}
