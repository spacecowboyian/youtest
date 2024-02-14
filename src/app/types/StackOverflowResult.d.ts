export interface StackOverflowResult {
  question_id: number;
  title: string;
  link: string;
  score: number;
  isAnswered: boolean;
  viewCount: number;
  answerCount: number;
  tags: string[];
  creationDate: Date;
  lastActivityDate: Date;
  owner: {
    userId: number;
    displayName: string;
    profileLink: string;
  };
}
