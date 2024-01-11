import { nanoid } from 'nanoid';
import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

export interface Bucket {
  id: string;
  fruits: string[];
  maxSize: number;
}

export interface Fruit {
  id: string;
  name: string;
  price: number;
}


interface State {
  buckets: Bucket[];
  fruits: Fruit[];
  addBucket: (maxSize: number) => void;
  addFruit: (name: string, price: number) => void;
  removeFruit: (id: string) => void;
}

const useStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        buckets: [],
        fruits: [],
        addBucket: (maxSize) => set(({ buckets }) => ({
          buckets: [
            ...buckets,
            {
              id: nanoid(),
              fruits: [],
              maxSize
            }
          ]
        })),
        addFruit: (name, price) => set(({ fruits }) => ({
          fruits: [
            ...fruits,
            {
              id: nanoid(),
              name,
              price
            }
          ]
        })),
        removeFruit: (id) => set(({ buckets, fruits }) => ({
          fruits: buckets.some(({ fruits }) => fruits.includes(id)) ?
            fruits :
            fruits.filter((fruit) => fruit.id !== id)
          }))
      }),
      {
        name: 'varejao-storage',
        skipHydration: true,
      }
    )
  )
)

export default useStore;