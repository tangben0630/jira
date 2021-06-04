
import { useState, useRef, useEffect } from 'react'
interface A {
  name: string;
  age: number;
}
export const useArray = <T>(initArray: T[]) => {
  const [value, setValue] = useState(initArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item])
  }
};

export const usePrevs = (b: any) => {
  const a: any = useRef()
  useEffect(() => {
    a.current = b
  })
  return a.current
};