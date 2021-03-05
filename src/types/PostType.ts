export type PostType = {
    body: string;
    id: number;
    title: string;
    user: {
        id: number;
        name: string;
    };
    userId: number;
}