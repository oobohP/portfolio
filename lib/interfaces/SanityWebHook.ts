interface SanityWebhookBody {
  _type: string;
  slug: {
      _type: 'slug';
      current: string;
  };
  title: string;
  subtitle: string;
  mainImage?: string;
  _createdAt: string;
  _updatedAt: string;
}