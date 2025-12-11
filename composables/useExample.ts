/**
 * サンプルコンポーザブル
 * コンポーネント間でロジックを共有するための例
 */
export const useExample = () => {
  const message = ref('Hello from composable!')

  const updateMessage = (newMessage: string) => {
    message.value = newMessage
  }

  return {
    message: readonly(message),
    updateMessage
  }
}
