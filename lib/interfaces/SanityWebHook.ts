interface SanityWebhookBody {
  _type: string;
  slug: {
      _type: 'slug';
      current: string;
  };
  title: string;
  subtitle: string;
  mainImage?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
}