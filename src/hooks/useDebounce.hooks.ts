import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  // State để lưu giá trị đã được debounce
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Tạo một timer để cập nhật giá trị sau khoảng delay
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup function để xóa timer khi value hoặc delay thay đổi
    // hoặc khi component unmount
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay]) // Dependencies array

  return debouncedValue
}
