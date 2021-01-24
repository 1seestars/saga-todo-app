export interface ITodo {
  id: string
  title: string
  createdAt: string
}

export interface IFetchedTodo {
  id: number
  title: string
  completed: boolean
  userId: number
}
