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
  putFruitInBucket: (fruitId: string, bucketId: string) => void;
  removeFruitFromBucket: (fruitIndex: number, bucketId: string) => void;
  removeBucket: (id: string) => void;
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
        putFruitInBucket: (fruitId, bucketId) => set(({ buckets }) => ({
          buckets: buckets.map(({ id, fruits, maxSize }) => {
            if (id === bucketId) {
              return { id, maxSize, fruits: [...fruits, fruitId] }
            }
            return { id, fruits, maxSize}
          })
        })),
        removeFruitFromBucket: (fruitIndex, bucketId) => set(({ buckets }) => ({
          buckets: buckets.map(({ id, fruits, maxSize }) => {
            if (id === bucketId) {
              return { id, maxSize, fruits: fruits.filter((_, index) => index !== fruitIndex) }
            }
            return { id, fruits, maxSize}
          })
        })),
        removeBucket: (id) => set(({ buckets }) => ({
          buckets: buckets.filter((bucket) => bucket.id !== id)
        })),
        removeFruit: (id) => set(({ fruits }) => ({
          fruits: fruits.filter((fruit) => fruit.id !== id)
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