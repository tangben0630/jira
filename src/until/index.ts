
import { useState } from 'react'
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