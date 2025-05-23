export default interface Task {
    uid: string
    title: string
    description: string
    dueDate: string
    completed: boolean
    createdAt: Date
    updatedAt: Date
}