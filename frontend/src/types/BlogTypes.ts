export interface BlogTypes {
  title: string;
  _id: string;
  slug: string;
  category: {
    title: string;
    _id: string;
  };
  type?: "free" | "premium";
  briefText: string;
  text: string;
  coverImage: string;
  likes?: string[];
  bookmarks?: string[];
  readingTime: number;
  tags?: string[];
  author?: string;
  related?: string[];
  comments?: string[];
  createdAt: Date;
  coverImageUrl?: string;
}
