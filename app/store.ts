import { nanoid } from 'nanoid';
import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

interface Bucket {
  id: string;
  fruits: string[];
  maxSize: number;
}

interface Fruit {
  id: string;
  name: string;
  number: number;
}


interface State {
  buckets: Bucket[];
  fruits: Fruit[];
  addBucket: (maxSize: number) => void;
}

const useStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        buckets: [],
        fruits: [],
        addBucket: (maxSize) => set(({ buckets}) => ({
          buckets: [
            ...buckets,
            {
              id: nanoid(),
              fruits: [],
              maxSize
            }
          ]
        })),
      }),
      {
        name: 'varejao-storage',
        skipHydration: true,
      }
    )
  )
)

export default useStore;