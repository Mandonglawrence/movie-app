export type userType = {
  email: string;
  name: string;
  password: string;
};

export type filmType = {
  name: string;
  description: string;
  release_date: string;
  ticket_price: number;
  country: string;
  genre: string;
  image_link: string;
};
export type commentType = {
  films_id: string;
  comment: string;
  user_id: number;
};
export type rateType = {
  films_id: string;
  rating: number;
  total_rated_users: number;
};
