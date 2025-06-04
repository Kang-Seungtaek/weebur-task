export interface ProductDetail {
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  reviews: ProductReview[];
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
