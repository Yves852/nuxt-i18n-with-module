import { ref } from '#imports'

export const useCounter = () => {
  const count = ref(0)

  const add = () => {
    count.value++
  }

  return { count, add }
}
