export interface Todo {
    id: string,
    description: string,
    createdDate: Date,
    deletedDate?: Date,
    isCompleted: boolean,
    isdeleted: boolean,
    completedDate: Date
};