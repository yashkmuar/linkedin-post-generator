export interface GeneratePostRequest {
    topic: string;
    tone: string;
    audience: string;
    length: string;
}

export interface GeneratePostResponse {
    post: string;
}
