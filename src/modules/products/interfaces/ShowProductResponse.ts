export default interface iShowProductResponse {
  id: string;
  title: string;
  url: string;
  avatar: string;
  price: number;
  description?: string;
  created_at: Date;
  classification?: number;
  store: {
    id: string;
    title: string;
  };
  user: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    title: string;
  };
}
