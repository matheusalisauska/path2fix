// Define o tipo do Tag
type Tag = {
    tag: {
        id: string;
        name: string;
        color: string;
        createdAt: Date;
    };
};

type TagWithIds = Tag & {
    errorId: string;
    tagId: string;
};

type Likes = {
    userId: string;
    errorId: string;
};

export type ErrorType = {
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    tags: TagWithIds[];
    likes: Likes[];
};




export type InputMasks = 'phone';

export type MaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;