import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

interface Bucket {
  id: string;
  fruits: string[];
  size: number;
}

interface Fruit {
  id: string;
  name: string;
  number: number;
}


interface State {
  buckets: Bucket[];
  fruits: Fruit[];
}

const useStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        buckets: [],
        fruits: []
      }),
      {
        name: 'varejao-storage',
      }
    )
  )
)

export default useStore;