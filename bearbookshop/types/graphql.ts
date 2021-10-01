import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: any;
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any;
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any;
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any;
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   *
   */
  URL: any;
};



/** A version of the API. */
export type ApiVersion = {
  __typename?: 'ApiVersion';
  /** The human-readable name of the version. */
  displayName: Scalars['String'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String'];
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/concepts/about-apis/versioning). */
  supported: Scalars['Boolean'];
};

/** Details about the gift card used on the checkout. */
export type AppliedGiftCard = Node & {
  __typename?: 'AppliedGiftCard';
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: Scalars['Money'];
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: MoneyV2;
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: Scalars['Money'];
  /** The amount left on the gift card. */
  balanceV2: MoneyV2;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String'];
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2;
};

/** An article in an online store blog. */
export type Article = Node & HasMetafields & {
  __typename?: 'Article';
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
   */
  author: ArticleAuthor;
  /** The article's author. */
  authorV2?: Maybe<ArticleAuthor>;
  /** The blog that the article belongs to. */
  blog: Blog;
  /** List of comments posted on the article. */
  comments: CommentConnection;
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>;
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']>;
  /** A human-friendly unique string for the Article automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the article. */
  image?: Maybe<Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime'];
  /** The article’s SEO information. */
  seo?: Maybe<Seo>;
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>;
  /** The article’s name. */
  title: Scalars['String'];
  /**
   * The url pointing to the article accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead
   */
  url: Scalars['URL'];
};


/** An article in an online store blog. */
export type ArticleCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** An article in an online store blog. */
export type ArticleContentArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ArticleExcerptArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ArticleImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ArticleMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** An article in an online store blog. */
export type ArticleMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** The author of an article. */
export type ArticleAuthor = {
  __typename?: 'ArticleAuthor';
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>;
  /** The author’s email. */
  email: Scalars['String'];
  /** The author's first name. */
  firstName: Scalars['String'];
  /** The author's last name. */
  lastName: Scalars['String'];
  /** The author's full name. */
  name: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Articles. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Article and a cursor during pagination. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ArticleEdge. */
  node: Article;
};

/** The set of valid sort keys for the Article query. */
export enum ArticleSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Represents a generic custom attribute. */
export type Attribute = {
  __typename?: 'Attribute';
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the input fields required for an attribute. */
export type AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value: Scalars['String'];
};

/** Automatic discount applications capture the intentions of a discount that was automatically applied. */
export type AutomaticDiscountApplication = DiscountApplication & {
  __typename?: 'AutomaticDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** A collection of available shipping rates for a checkout. */
export type AvailableShippingRates = {
  __typename?: 'AvailableShippingRates';
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   */
  ready: Scalars['Boolean'];
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<ShippingRate>>;
};

/** An online store blog. */
export type Blog = Node & HasMetafields & {
  __typename?: 'Blog';
  /** Find an article by its handle. */
  articleByHandle?: Maybe<Article>;
  /** List of the blog's articles. */
  articles: ArticleConnection;
  /** The authors who have contributed to the blog. */
  authors: Array<ArticleAuthor>;
  /** A human-friendly unique string for the Blog automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** The blog's SEO information. */
  seo?: Maybe<Seo>;
  /** The blogs’s title. */
  title: Scalars['String'];
  /**
   * The url pointing to the blog accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead
   */
  url: Scalars['URL'];
};


/** An online store blog. */
export type BlogArticleByHandleArgs = {
  handle: Scalars['String'];
};


/** An online store blog. */
export type BlogArticlesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ArticleSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** An online store blog. */
export type BlogMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** An online store blog. */
export type BlogMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple Blogs. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  /** A list of edges. */
  edges: Array<BlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Blog and a cursor during pagination. */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of BlogEdge. */
  node: Blog;
};

/** The set of valid sort keys for the Blog query. */
export enum BlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum CardBrand {
  /** Visa. */
  Visa = 'VISA',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Discover. */
  Discover = 'DISCOVER',
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** JCB. */
  Jcb = 'JCB'
}

/** A container for all the information required to checkout items and pay. */
export type Checkout = Node & {
  __typename?: 'Checkout';
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<AppliedGiftCard>;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   */
  availableShippingRates?: Maybe<AvailableShippingRates>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: CheckoutBuyerIdentity;
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime'];
  /** The currency code for the Checkout. */
  currencyCode: CurrencyCode;
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<Attribute>;
  /**
   * The customer associated with the checkout.
   * @deprecated This field will always return null. If you have an authentication token for the customer, you can use the `customer` field on the query root to retrieve it.
   */
  customer?: Maybe<Customer>;
  /** Discounts that have been applied on the checkout. */
  discountApplications: DiscountApplicationConnection;
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: CheckoutLineItemConnection;
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: MoneyV2;
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>;
  /** The resulting order from a paid checkout. */
  order?: Maybe<Order>;
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>;
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: Scalars['Money'];
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards. */
  paymentDueV2: MoneyV2;
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   */
  ready: Scalars['Boolean'];
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddress>;
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShippingRate>;
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: Scalars['Money'];
  /** Price of the checkout before duties, shipping and taxes. */
  subtotalPriceV2: MoneyV2;
  /** Specifies if the Checkout is tax exempt. */
  taxExempt: Scalars['Boolean'];
  /** Specifies if taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean'];
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<MoneyV2>;
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money'];
  /** The sum of all the prices of all the items in the checkout, duties, taxes and discounts included. */
  totalPriceV2: MoneyV2;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax: Scalars['Money'];
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTaxV2: MoneyV2;
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL'];
};


/** A container for all the information required to checkout items and pay. */
export type CheckoutDiscountApplicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A container for all the information required to checkout items and pay. */
export type CheckoutLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Specifies the fields required to update a checkout's attributes. */
export type CheckoutAttributesUpdateInput = {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>;
};

/** Return type for `checkoutAttributesUpdate` mutation. */
export type CheckoutAttributesUpdatePayload = {
  __typename?: 'CheckoutAttributesUpdatePayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Specifies the fields required to update a checkout's attributes. */
export type CheckoutAttributesUpdateV2Input = {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>;
};

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export type CheckoutAttributesUpdateV2Payload = {
  __typename?: 'CheckoutAttributesUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** The identity of the customer associated with the checkout. */
export type CheckoutBuyerIdentity = {
  __typename?: 'CheckoutBuyerIdentity';
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<CountryCode>;
};

/** Specifies the identity of the customer associated with the checkout. */
export type CheckoutBuyerIdentityInput = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   */
  countryCode: CountryCode;
};

/** Return type for `checkoutCompleteFree` mutation. */
export type CheckoutCompleteFreePayload = {
  __typename?: 'CheckoutCompleteFreePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export type CheckoutCompleteWithCreditCardPayload = {
  __typename?: 'CheckoutCompleteWithCreditCardPayload';
  /** The checkout on which the payment was applied. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export type CheckoutCompleteWithCreditCardV2Payload = {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export type CheckoutCompleteWithTokenizedPaymentPayload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentPayload';
  /** The checkout on which the payment was applied. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export type CheckoutCompleteWithTokenizedPaymentV2Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV2Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export type CheckoutCompleteWithTokenizedPaymentV3Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Specifies the fields required to create a checkout. */
export type CheckoutCreateInput = {
  /** The email with which the customer wants to checkout. */
  email?: Maybe<Scalars['String']>;
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: Maybe<Array<CheckoutLineItemInput>>;
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddressInput>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>;
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   *  This argument is deprecated: Use `country` field instead.
   */
  presentmentCurrencyCode?: Maybe<CurrencyCode>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: Maybe<CheckoutBuyerIdentityInput>;
};

/** Return type for `checkoutCreate` mutation. */
export type CheckoutCreatePayload = {
  __typename?: 'CheckoutCreatePayload';
  /** The new checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCustomerAssociate` mutation. */
export type CheckoutCustomerAssociatePayload = {
  __typename?: 'CheckoutCustomerAssociatePayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The associated customer object. */
  customer?: Maybe<Customer>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export type CheckoutCustomerAssociateV2Payload = {
  __typename?: 'CheckoutCustomerAssociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /** The associated customer object. */
  customer?: Maybe<Customer>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCustomerDisassociate` mutation. */
export type CheckoutCustomerDisassociatePayload = {
  __typename?: 'CheckoutCustomerDisassociatePayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export type CheckoutCustomerDisassociateV2Payload = {
  __typename?: 'CheckoutCustomerDisassociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutDiscountCodeApply` mutation. */
export type CheckoutDiscountCodeApplyPayload = {
  __typename?: 'CheckoutDiscountCodeApplyPayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export type CheckoutDiscountCodeApplyV2Payload = {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export type CheckoutDiscountCodeRemovePayload = {
  __typename?: 'CheckoutDiscountCodeRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutEmailUpdate` mutation. */
export type CheckoutEmailUpdatePayload = {
  __typename?: 'CheckoutEmailUpdatePayload';
  /** The checkout object with the updated email. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutEmailUpdateV2` mutation. */
export type CheckoutEmailUpdateV2Payload = {
  __typename?: 'CheckoutEmailUpdateV2Payload';
  /** The checkout object with the updated email. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Possible error codes that could be returned by CheckoutUserError. */
export enum CheckoutErrorCode {
  /** The input value is blank. */
  Blank = 'BLANK',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  /** Unable to apply discount. */
  UnableToApply = 'UNABLE_TO_APPLY',
  /** Discount already applied. */
  DiscountAlreadyApplied = 'DISCOUNT_ALREADY_APPLIED',
  /** Throttled during checkout. */
  ThrottledDuringCheckout = 'THROTTLED_DURING_CHECKOUT',
  /** Queue token has expired. */
  ExpiredQueueToken = 'EXPIRED_QUEUE_TOKEN',
  /** Queue token is invalid. */
  InvalidQueueToken = 'INVALID_QUEUE_TOKEN',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrency = 'INVALID_COUNTRY_AND_CURRENCY'
}

/** Return type for `checkoutGiftCardApply` mutation. */
export type CheckoutGiftCardApplyPayload = {
  __typename?: 'CheckoutGiftCardApplyPayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutGiftCardRemove` mutation. */
export type CheckoutGiftCardRemovePayload = {
  __typename?: 'CheckoutGiftCardRemovePayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export type CheckoutGiftCardRemoveV2Payload = {
  __typename?: 'CheckoutGiftCardRemoveV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutGiftCardsAppend` mutation. */
export type CheckoutGiftCardsAppendPayload = {
  __typename?: 'CheckoutGiftCardsAppendPayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** A single line item in the checkout, grouped by variant and attributes. */
export type CheckoutLineItem = Node & {
  __typename?: 'CheckoutLineItem';
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String'];
  /** Unit price of the line item. */
  unitPrice?: Maybe<MoneyV2>;
  /** Product variant of the line item. */
  variant?: Maybe<ProductVariant>;
};

/** An auto-generated type for paginating through multiple CheckoutLineItems. */
export type CheckoutLineItemConnection = {
  __typename?: 'CheckoutLineItemConnection';
  /** A list of edges. */
  edges: Array<CheckoutLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one CheckoutLineItem and a cursor during pagination. */
export type CheckoutLineItemEdge = {
  __typename?: 'CheckoutLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CheckoutLineItemEdge. */
  node: CheckoutLineItem;
};

/** Specifies the input fields to create a line item on a checkout. */
export type CheckoutLineItemInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<AttributeInput>>;
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID'];
};

/** Specifies the input fields to update a line item on the checkout. */
export type CheckoutLineItemUpdateInput = {
  /** The identifier of the line item. */
  id?: Maybe<Scalars['ID']>;
  /** The variant identifier of the line item. */
  variantId?: Maybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: Maybe<Scalars['Int']>;
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<AttributeInput>>;
};

/** Return type for `checkoutLineItemsAdd` mutation. */
export type CheckoutLineItemsAddPayload = {
  __typename?: 'CheckoutLineItemsAddPayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutLineItemsRemove` mutation. */
export type CheckoutLineItemsRemovePayload = {
  __typename?: 'CheckoutLineItemsRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutLineItemsReplace` mutation. */
export type CheckoutLineItemsReplacePayload = {
  __typename?: 'CheckoutLineItemsReplacePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CheckoutUserError>;
};

/** Return type for `checkoutLineItemsUpdate` mutation. */
export type CheckoutLineItemsUpdatePayload = {
  __typename?: 'CheckoutLineItemsUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export type CheckoutShippingAddressUpdatePayload = {
  __typename?: 'CheckoutShippingAddressUpdatePayload';
  /** The updated checkout object. */
  checkout: Checkout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export type CheckoutShippingAddressUpdateV2Payload = {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `checkoutShippingLineUpdate` mutation. */
export type CheckoutShippingLineUpdatePayload = {
  __typename?: 'CheckoutShippingLineUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Represents an error that happens during execution of a checkout mutation. */
export type CheckoutUserError = DisplayableError & {
  __typename?: 'CheckoutUserError';
  /** The error code. */
  code?: Maybe<CheckoutErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type Collection = Node & HasMetafields & {
  __typename?: 'Collection';
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the collection. */
  image?: Maybe<Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** List of products in the collection. */
  products: ProductConnection;
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String'];
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductCollectionSortKeys>;
};

/** An auto-generated type for paginating through multiple Collections. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Collection and a cursor during pagination. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionEdge. */
  node: Collection;
};

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** A comment on an article. */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The comment’s author. */
  author: CommentAuthor;
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};


/** A comment on an article. */
export type CommentContentArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};

/** The author of a comment. */
export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  /** The author's email. */
  email: Scalars['String'];
  /** The author’s name. */
  name: Scalars['String'];
};

/** An auto-generated type for paginating through multiple Comments. */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges: Array<CommentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Comment and a cursor during pagination. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CommentEdge. */
  node: Comment;
};

/** A country. */
export type Country = {
  __typename?: 'Country';
  /** The currency of the country. */
  currency: Currency;
  /** The ISO code of the country. */
  isoCode: CountryCode;
  /** The name of the country. */
  name: Scalars['String'];
  /** The unit system used in the country. */
  unitSystem: UnitSystem;
};

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum CountryCode {
  /** Afghanistan. */
  Af = 'AF',
  /** Åland Islands. */
  Ax = 'AX',
  /** Albania. */
  Al = 'AL',
  /** Algeria. */
  Dz = 'DZ',
  /** Andorra. */
  Ad = 'AD',
  /** Angola. */
  Ao = 'AO',
  /** Anguilla. */
  Ai = 'AI',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Argentina. */
  Ar = 'AR',
  /** Armenia. */
  Am = 'AM',
  /** Aruba. */
  Aw = 'AW',
  /** Ascension Island. */
  Ac = 'AC',
  /** Australia. */
  Au = 'AU',
  /** Austria. */
  At = 'AT',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bahamas. */
  Bs = 'BS',
  /** Bahrain. */
  Bh = 'BH',
  /** Bangladesh. */
  Bd = 'BD',
  /** Barbados. */
  Bb = 'BB',
  /** Belarus. */
  By = 'BY',
  /** Belgium. */
  Be = 'BE',
  /** Belize. */
  Bz = 'BZ',
  /** Benin. */
  Bj = 'BJ',
  /** Bermuda. */
  Bm = 'BM',
  /** Bhutan. */
  Bt = 'BT',
  /** Bolivia. */
  Bo = 'BO',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Botswana. */
  Bw = 'BW',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Brazil. */
  Br = 'BR',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Brunei. */
  Bn = 'BN',
  /** Bulgaria. */
  Bg = 'BG',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Burundi. */
  Bi = 'BI',
  /** Cambodia. */
  Kh = 'KH',
  /** Canada. */
  Ca = 'CA',
  /** Cape Verde. */
  Cv = 'CV',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Central African Republic. */
  Cf = 'CF',
  /** Chad. */
  Td = 'TD',
  /** Chile. */
  Cl = 'CL',
  /** China. */
  Cn = 'CN',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Colombia. */
  Co = 'CO',
  /** Comoros. */
  Km = 'KM',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Cook Islands. */
  Ck = 'CK',
  /** Costa Rica. */
  Cr = 'CR',
  /** Croatia. */
  Hr = 'HR',
  /** Cuba. */
  Cu = 'CU',
  /** Curaçao. */
  Cw = 'CW',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Denmark. */
  Dk = 'DK',
  /** Djibouti. */
  Dj = 'DJ',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Ecuador. */
  Ec = 'EC',
  /** Egypt. */
  Eg = 'EG',
  /** El Salvador. */
  Sv = 'SV',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Eritrea. */
  Er = 'ER',
  /** Estonia. */
  Ee = 'EE',
  /** Eswatini. */
  Sz = 'SZ',
  /** Ethiopia. */
  Et = 'ET',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** Fiji. */
  Fj = 'FJ',
  /** Finland. */
  Fi = 'FI',
  /** France. */
  Fr = 'FR',
  /** French Guiana. */
  Gf = 'GF',
  /** French Polynesia. */
  Pf = 'PF',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Gabon. */
  Ga = 'GA',
  /** Gambia. */
  Gm = 'GM',
  /** Georgia. */
  Ge = 'GE',
  /** Germany. */
  De = 'DE',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greece. */
  Gr = 'GR',
  /** Greenland. */
  Gl = 'GL',
  /** Grenada. */
  Gd = 'GD',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Guatemala. */
  Gt = 'GT',
  /** Guernsey. */
  Gg = 'GG',
  /** Guinea. */
  Gn = 'GN',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Haiti. */
  Ht = 'HT',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Vatican City. */
  Va = 'VA',
  /** Honduras. */
  Hn = 'HN',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Hungary. */
  Hu = 'HU',
  /** Iceland. */
  Is = 'IS',
  /** India. */
  In = 'IN',
  /** Indonesia. */
  Id = 'ID',
  /** Iran. */
  Ir = 'IR',
  /** Iraq. */
  Iq = 'IQ',
  /** Ireland. */
  Ie = 'IE',
  /** Isle of Man. */
  Im = 'IM',
  /** Israel. */
  Il = 'IL',
  /** Italy. */
  It = 'IT',
  /** Jamaica. */
  Jm = 'JM',
  /** Japan. */
  Jp = 'JP',
  /** Jersey. */
  Je = 'JE',
  /** Jordan. */
  Jo = 'JO',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Kenya. */
  Ke = 'KE',
  /** Kiribati. */
  Ki = 'KI',
  /** North Korea. */
  Kp = 'KP',
  /** Kosovo. */
  Xk = 'XK',
  /** Kuwait. */
  Kw = 'KW',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Laos. */
  La = 'LA',
  /** Latvia. */
  Lv = 'LV',
  /** Lebanon. */
  Lb = 'LB',
  /** Lesotho. */
  Ls = 'LS',
  /** Liberia. */
  Lr = 'LR',
  /** Libya. */
  Ly = 'LY',
  /** Liechtenstein. */
  Li = 'LI',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Macao SAR. */
  Mo = 'MO',
  /** Madagascar. */
  Mg = 'MG',
  /** Malawi. */
  Mw = 'MW',
  /** Malaysia. */
  My = 'MY',
  /** Maldives. */
  Mv = 'MV',
  /** Mali. */
  Ml = 'ML',
  /** Malta. */
  Mt = 'MT',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Mauritius. */
  Mu = 'MU',
  /** Mayotte. */
  Yt = 'YT',
  /** Mexico. */
  Mx = 'MX',
  /** Moldova. */
  Md = 'MD',
  /** Monaco. */
  Mc = 'MC',
  /** Mongolia. */
  Mn = 'MN',
  /** Montenegro. */
  Me = 'ME',
  /** Montserrat. */
  Ms = 'MS',
  /** Morocco. */
  Ma = 'MA',
  /** Mozambique. */
  Mz = 'MZ',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Namibia. */
  Na = 'NA',
  /** Nauru. */
  Nr = 'NR',
  /** Nepal. */
  Np = 'NP',
  /** Netherlands. */
  Nl = 'NL',
  /** Netherlands Antilles. */
  An = 'AN',
  /** New Caledonia. */
  Nc = 'NC',
  /** New Zealand. */
  Nz = 'NZ',
  /** Nicaragua. */
  Ni = 'NI',
  /** Niger. */
  Ne = 'NE',
  /** Nigeria. */
  Ng = 'NG',
  /** Niue. */
  Nu = 'NU',
  /** Norfolk Island. */
  Nf = 'NF',
  /** North Macedonia. */
  Mk = 'MK',
  /** Norway. */
  No = 'NO',
  /** Oman. */
  Om = 'OM',
  /** Pakistan. */
  Pk = 'PK',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Panama. */
  Pa = 'PA',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Paraguay. */
  Py = 'PY',
  /** Peru. */
  Pe = 'PE',
  /** Philippines. */
  Ph = 'PH',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Poland. */
  Pl = 'PL',
  /** Portugal. */
  Pt = 'PT',
  /** Qatar. */
  Qa = 'QA',
  /** Cameroon. */
  Cm = 'CM',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** St. Helena. */
  Sh = 'SH',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** St. Lucia. */
  Lc = 'LC',
  /** St. Martin. */
  Mf = 'MF',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Samoa. */
  Ws = 'WS',
  /** San Marino. */
  Sm = 'SM',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Senegal. */
  Sn = 'SN',
  /** Serbia. */
  Rs = 'RS',
  /** Seychelles. */
  Sc = 'SC',
  /** Sierra Leone. */
  Sl = 'SL',
  /** Singapore. */
  Sg = 'SG',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Slovakia. */
  Sk = 'SK',
  /** Slovenia. */
  Si = 'SI',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Somalia. */
  So = 'SO',
  /** South Africa. */
  Za = 'ZA',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** South Korea. */
  Kr = 'KR',
  /** South Sudan. */
  Ss = 'SS',
  /** Spain. */
  Es = 'ES',
  /** Sri Lanka. */
  Lk = 'LK',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Sudan. */
  Sd = 'SD',
  /** Suriname. */
  Sr = 'SR',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Sweden. */
  Se = 'SE',
  /** Switzerland. */
  Ch = 'CH',
  /** Syria. */
  Sy = 'SY',
  /** Taiwan. */
  Tw = 'TW',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tanzania. */
  Tz = 'TZ',
  /** Thailand. */
  Th = 'TH',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Togo. */
  Tg = 'TG',
  /** Tokelau. */
  Tk = 'TK',
  /** Tonga. */
  To = 'TO',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Tunisia. */
  Tn = 'TN',
  /** Turkey. */
  Tr = 'TR',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Tuvalu. */
  Tv = 'TV',
  /** Uganda. */
  Ug = 'UG',
  /** Ukraine. */
  Ua = 'UA',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** United Kingdom. */
  Gb = 'GB',
  /** United States. */
  Us = 'US',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vanuatu. */
  Vu = 'VU',
  /** Venezuela. */
  Ve = 'VE',
  /** Vietnam. */
  Vn = 'VN',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Western Sahara. */
  Eh = 'EH',
  /** Yemen. */
  Ye = 'YE',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ'
}

/** Credit card information used for a payment. */
export type CreditCard = {
  __typename?: 'CreditCard';
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>;
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>;
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>;
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>;
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>;
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>;
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>;
};

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export type CreditCardPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money'];
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String'];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>;
};

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export type CreditCardPaymentInputV2 = {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String'];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>;
};

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the top of the image. */
  Top = 'TOP',
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT'
}

/** A currency. */
export type Currency = {
  __typename?: 'Currency';
  /** The ISO code of the currency. */
  isoCode: CurrencyCode;
  /** The name of the currency. */
  name: Scalars['String'];
  /** The symbol of the currency. */
  symbol: Scalars['String'];
};

/** Currency codes. */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
  /** Unrecognized currency. */
  Xxx = 'XXX'
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type Customer = HasMetafields & {
  __typename?: 'Customer';
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean'];
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime'];
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddress>;
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String'];
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** A unique identifier for the customer. */
  id: Scalars['ID'];
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<Checkout>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** The orders associated with the customer. */
  orders: OrderConnection;
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   */
  tags: Array<Scalars['String']>;
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<OrderSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export type CustomerAccessToken = {
  __typename?: 'CustomerAccessToken';
  /** The customer’s access token. */
  accessToken: Scalars['String'];
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime'];
};

/** Specifies the input fields required to create a customer access token. */
export type CustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String'];
  /** The login password to be used by the customer. */
  password: Scalars['String'];
};

/** Return type for `customerAccessTokenCreate` mutation. */
export type CustomerAccessTokenCreatePayload = {
  __typename?: 'CustomerAccessTokenCreatePayload';
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export type CustomerAccessTokenCreateWithMultipassPayload = {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload';
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
};

/** Return type for `customerAccessTokenDelete` mutation. */
export type CustomerAccessTokenDeletePayload = {
  __typename?: 'CustomerAccessTokenDeletePayload';
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>;
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `customerAccessTokenRenew` mutation. */
export type CustomerAccessTokenRenewPayload = {
  __typename?: 'CustomerAccessTokenRenewPayload';
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>;
};

/** Return type for `customerActivateByUrl` mutation. */
export type CustomerActivateByUrlPayload = {
  __typename?: 'CustomerActivateByUrlPayload';
  /** The customer that was activated. */
  customer?: Maybe<Customer>;
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
};

/** Specifies the input fields required to activate a customer. */
export type CustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String'];
  /** New password that will be set during activation. */
  password: Scalars['String'];
};

/** Return type for `customerActivate` mutation. */
export type CustomerActivatePayload = {
  __typename?: 'CustomerActivatePayload';
  /** The customer object. */
  customer?: Maybe<Customer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAddressCreate` mutation. */
export type CustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload';
  /** The new customer address object. */
  customerAddress?: Maybe<MailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAddressDelete` mutation. */
export type CustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerAddressUpdate` mutation. */
export type CustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload';
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<MailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** The fields required to create a new customer. */
export type CustomerCreateInput = {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The customer’s email. */
  email: Scalars['String'];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /** The login password used by the customer. */
  password: Scalars['String'];
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>;
};

/** Return type for `customerCreate` mutation. */
export type CustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload';
  /** The created customer object. */
  customer?: Maybe<Customer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerDefaultAddressUpdate` mutation. */
export type CustomerDefaultAddressUpdatePayload = {
  __typename?: 'CustomerDefaultAddressUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<Customer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Possible error codes that could be returned by CustomerUserError. */
export enum CustomerErrorCode {
  /** The input value is blank. */
  Blank = 'BLANK',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST'
}

/** Return type for `customerRecover` mutation. */
export type CustomerRecoverPayload = {
  __typename?: 'CustomerRecoverPayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Return type for `customerResetByUrl` mutation. */
export type CustomerResetByUrlPayload = {
  __typename?: 'CustomerResetByUrlPayload';
  /** The customer object which was reset. */
  customer?: Maybe<Customer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Specifies the fields required to reset a customer’s password. */
export type CustomerResetInput = {
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String'];
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String'];
};

/** Return type for `customerReset` mutation. */
export type CustomerResetPayload = {
  __typename?: 'CustomerResetPayload';
  /** The customer object which was reset. */
  customer?: Maybe<Customer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Specifies the fields required to update the Customer information. */
export type CustomerUpdateInput = {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The customer’s email. */
  email?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   */
  phone?: Maybe<Scalars['String']>;
  /** The login password used by the customer. */
  password?: Maybe<Scalars['String']>;
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>;
};

/** Return type for `customerUpdate` mutation. */
export type CustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<Customer>;
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>;
};

/** Represents an error that happens during execution of a customer mutation. */
export type CustomerUserError = DisplayableError & {
  __typename?: 'CustomerUserError';
  /** The error code. */
  code?: Maybe<CustomerErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};



/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY'
}

/** An amount discounting the line that has been allocated by a discount. */
export type DiscountAllocation = {
  __typename?: 'DiscountAllocation';
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2;
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplication;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 */
export type DiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /** The value is specifically applied onto a particular line. */
  One = 'ONE'
}

/** An auto-generated type for paginating through multiple DiscountApplications. */
export type DiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection';
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one DiscountApplication and a cursor during pagination. */
export type DiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication;
};

/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines it is entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT'
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE'
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 */
export type DiscountCodeApplication = DiscountApplication & {
  __typename?: 'DiscountCodeApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean'];
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String'];
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The value of the discount application. */
  value: PricingValue;
};

/** Represents an error in the input of a mutation. */
export type DisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a web address. */
export type Domain = {
  __typename?: 'Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL'];
};

/** Represents a video hosted outside of Shopify. */
export type ExternalVideo = Node & Media & {
  __typename?: 'ExternalVideo';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The URL. */
  embeddedUrl: Scalars['URL'];
  /** The host of the external video. */
  host: MediaHost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/** Represents a single fulfillment in an order. */
export type Fulfillment = {
  __typename?: 'Fulfillment';
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   */
  trackingInfo: Array<FulfillmentTrackingInfo>;
};


/** Represents a single fulfillment in an order. */
export type FulfillmentFulfillmentLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** Represents a single fulfillment in an order. */
export type FulfillmentTrackingInfoArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export type FulfillmentLineItem = {
  __typename?: 'FulfillmentLineItem';
  /** The associated order's line item. */
  lineItem: OrderLineItem;
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int'];
};

/** An auto-generated type for paginating through multiple FulfillmentLineItems. */
export type FulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection';
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination. */
export type FulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem;
};

/** Tracking information associated with the fulfillment. */
export type FulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo';
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>;
};

/** Used to specify a geographical location. */
export type GeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float'];
  /** The coordinate's longitude value. */
  longitude: Scalars['Float'];
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafields = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** Represents an image resource. */
export type Image = {
  __typename?: 'Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: Scalars['URL'];
  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   *
   * These transformations were specified by arguments on the parent field.
   *
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   *
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   *
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   *
   * Before:
   * ```graphql
   * {
   *   shop {
   *     productImages(maxWidth: 200, scale: 2) {
   *       edges {
   *         node {
   *           src
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   * After:
   * ```graphql
   * {
   *   shop {
   *     productImages {
   *       edges {
   *         node {
   *           transformedSrc(maxWidth: 200, scale: 2)
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   */
  src: Scalars['URL'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: Scalars['URL'];
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ImageTransformedSrcArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
  preferredContentType?: Maybe<ImageContentType>;
};

/** An auto-generated type for paginating through multiple Images. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** List of supported image content types. */
export enum ImageContentType {
  /** A PNG image. */
  Png = 'PNG',
  /** A JPG image. */
  Jpg = 'JPG',
  /** A WEBP image. */
  Webp = 'WEBP'
}

/** An auto-generated type which holds one Image and a cursor during pagination. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: Image;
};

/** Information about the localized experiences configured for the shop. */
export type Localization = {
  __typename?: 'Localization';
  /** List of countries with enabled localized experiences. */
  availableCountries: Array<Country>;
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: Country;
};

/** Represents a location where product inventory is held. */
export type Location = Node & {
  __typename?: 'Location';
  /** The address of the location. */
  address: LocationAddress;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the location. */
  name: Scalars['String'];
};

/** Represents the address of the location. */
export type LocationAddress = {
  __typename?: 'LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The two-letter country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the location address. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /**
   * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple Locations. */
export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** A list of edges. */
  edges: Array<LocationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Location and a cursor during pagination. */
export type LocationEdge = {
  __typename?: 'LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LocationEdge. */
  node: Location;
};

/** The set of valid sort keys for the Location query. */
export enum LocationSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE'
}

/** Represents a mailing address for customers and shipping. */
export type MailingAddress = Node & {
  __typename?: 'MailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<CountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};


/** Represents a mailing address for customers and shipping. */
export type MailingAddressFormattedArgs = {
  withName?: Maybe<Scalars['Boolean']>;
  withCompany?: Maybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple MailingAddresses. */
export type MailingAddressConnection = {
  __typename?: 'MailingAddressConnection';
  /** A list of edges. */
  edges: Array<MailingAddressEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one MailingAddress and a cursor during pagination. */
export type MailingAddressEdge = {
  __typename?: 'MailingAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress;
};

/** Specifies the fields accepted to create or update a mailing address. */
export type MailingAddressInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>;
  /** The name of the country. */
  country?: Maybe<Scalars['String']>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};

/** Manual discount applications capture the intentions of a discount that was manually created. */
export type ManualDiscountApplication = DiscountApplication & {
  __typename?: 'ManualDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /** The description of the application. */
  description?: Maybe<Scalars['String']>;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/** Represents a media interface. */
export type Media = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/** An auto-generated type for paginating through multiple Media. */
export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges: Array<MediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** The possible content types for a media object. */
export enum MediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO'
}

/** An auto-generated type which holds one Media and a cursor during pagination. */
export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MediaEdge. */
  node: Media;
};

/** Host for a Media Resource. */
export enum MediaHost {
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE',
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO'
}

/** Represents a Shopify hosted image. */
export type MediaImage = Node & Media & {
  __typename?: 'MediaImage';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image for the media. */
  image?: Maybe<Image>;
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
};

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export type Metafield = Node & {
  __typename?: 'Metafield';
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key name for a metafield. */
  key: Scalars['String'];
  /** The namespace for a metafield. */
  namespace: Scalars['String'];
  /** The parent object that the metafield belongs to. */
  parentResource: MetafieldParentResource;
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   */
  type: Scalars['String'];
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a metafield. */
  value: Scalars['String'];
  /**
   * Represents the metafield value type.
   * @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07.
   */
  valueType: MetafieldValueType;
};

/** An auto-generated type for paginating through multiple Metafields. */
export type MetafieldConnection = {
  __typename?: 'MetafieldConnection';
  /** A list of edges. */
  edges: Array<MetafieldEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Metafield and a cursor during pagination. */
export type MetafieldEdge = {
  __typename?: 'MetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldEdge. */
  node: Metafield;
};

/** A resource that the metafield belongs to. */
export type MetafieldParentResource = Article | Blog | Collection | Customer | Order | Page | Product | ProductVariant | Shop;

/** Metafield value types. */
export enum MetafieldValueType {
  /** A string metafield. */
  String = 'STRING',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A json string metafield. */
  JsonString = 'JSON_STRING'
}

/** Represents a Shopify hosted 3D model. */
export type Model3d = Node & Media & {
  __typename?: 'Model3d';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
  /** The sources for a 3d model. */
  sources: Array<Model3dSource>;
};

/** Represents a source for a Shopify hosted 3d model. */
export type Model3dSource = {
  __typename?: 'Model3dSource';
  /** The filesize of the 3d model. */
  filesize: Scalars['Int'];
  /** The format of the 3d model. */
  format: Scalars['String'];
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String'];
  /** The URL of the 3d model. */
  url: Scalars['String'];
};


/** Specifies the fields for a monetary value with currency. */
export type MoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/** A monetary value with currency. */
export type MoneyV2 = {
  __typename?: 'MoneyV2';
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

/** An auto-generated type for paginating through multiple MoneyV2s. */
export type MoneyV2Connection = {
  __typename?: 'MoneyV2Connection';
  /** A list of edges. */
  edges: Array<MoneyV2Edge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one MoneyV2 and a cursor during pagination. */
export type MoneyV2Edge = {
  __typename?: 'MoneyV2Edge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MoneyV2Edge. */
  node: MoneyV2;
};

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Updates the attributes of a checkout if `allowPartialAddresses` is `true`.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate?: Maybe<CheckoutAttributesUpdatePayload>;
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<CheckoutAttributesUpdateV2Payload>;
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<CheckoutCompleteFreePayload>;
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard?: Maybe<CheckoutCompleteWithCreditCardPayload>;
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://help.shopify.com/api/guides/sales-channel-sdk/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<CheckoutCompleteWithCreditCardV2Payload>;
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<CheckoutCompleteWithTokenizedPaymentPayload>;
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<CheckoutCompleteWithTokenizedPaymentV2Payload>;
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<CheckoutCompleteWithTokenizedPaymentV3Payload>;
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreatePayload>;
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate?: Maybe<CheckoutCustomerAssociatePayload>;
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<CheckoutCustomerAssociateV2Payload>;
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate?: Maybe<CheckoutCustomerDisassociatePayload>;
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<CheckoutCustomerDisassociateV2Payload>;
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply?: Maybe<CheckoutDiscountCodeApplyPayload>;
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<CheckoutDiscountCodeApplyV2Payload>;
  /** Removes the applied discount from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<CheckoutDiscountCodeRemovePayload>;
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdatePayload>;
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<CheckoutEmailUpdateV2Payload>;
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply?: Maybe<CheckoutGiftCardApplyPayload>;
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove?: Maybe<CheckoutGiftCardRemovePayload>;
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<CheckoutGiftCardRemoveV2Payload>;
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<CheckoutGiftCardsAppendPayload>;
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<CheckoutLineItemsAddPayload>;
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<CheckoutLineItemsRemovePayload>;
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<CheckoutLineItemsReplacePayload>;
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<CheckoutLineItemsUpdatePayload>;
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdatePayload>;
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<CheckoutShippingAddressUpdateV2Payload>;
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<CheckoutShippingLineUpdatePayload>;
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessTokenCreatePayload>;
  /**
   * Creates a customer access token using a multipass token instead of email and password.
   * A customer record is created if customer does not exist. If a customer record already
   * exists but the record is disabled, then it's enabled.
   */
  customerAccessTokenCreateWithMultipass?: Maybe<CustomerAccessTokenCreateWithMultipassPayload>;
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<CustomerAccessTokenDeletePayload>;
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   */
  customerAccessTokenRenew?: Maybe<CustomerAccessTokenRenewPayload>;
  /** Activates a customer. */
  customerActivate?: Maybe<CustomerActivatePayload>;
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<CustomerActivateByUrlPayload>;
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<CustomerAddressCreatePayload>;
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<CustomerAddressDeletePayload>;
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayload>;
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>;
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayload>;
  /** Sends a reset password email to the customer, as the first step in the reset password process. */
  customerRecover?: Maybe<CustomerRecoverPayload>;
  /** Resets a customer’s password with a token received from `CustomerRecover`. */
  customerReset?: Maybe<CustomerResetPayload>;
  /** Resets a customer’s password with the reset password url received from `CustomerRecover`. */
  customerResetByUrl?: Maybe<CustomerResetByUrlPayload>;
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdatePayload>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutAttributesUpdateArgs = {
  checkoutId: Scalars['ID'];
  input: CheckoutAttributesUpdateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutAttributesUpdateV2Args = {
  checkoutId: Scalars['ID'];
  input: CheckoutAttributesUpdateV2Input;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteFreeArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithCreditCardArgs = {
  checkoutId: Scalars['ID'];
  payment: CreditCardPaymentInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithCreditCardV2Args = {
  checkoutId: Scalars['ID'];
  payment: CreditCardPaymentInputV2;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentArgs = {
  checkoutId: Scalars['ID'];
  payment: TokenizedPaymentInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentV2Args = {
  checkoutId: Scalars['ID'];
  payment: TokenizedPaymentInputV2;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentV3Args = {
  checkoutId: Scalars['ID'];
  payment: TokenizedPaymentInputV3;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
  queueToken?: Maybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerAssociateArgs = {
  checkoutId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerAssociateV2Args = {
  checkoutId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerDisassociateArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerDisassociateV2Args = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeApplyArgs = {
  discountCode: Scalars['String'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeApplyV2Args = {
  discountCode: Scalars['String'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeRemoveArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutEmailUpdateArgs = {
  checkoutId: Scalars['ID'];
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutEmailUpdateV2Args = {
  checkoutId: Scalars['ID'];
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardApplyArgs = {
  giftCardCode: Scalars['String'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardRemoveArgs = {
  appliedGiftCardId: Scalars['ID'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardRemoveV2Args = {
  appliedGiftCardId: Scalars['ID'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardsAppendArgs = {
  giftCardCodes: Array<Scalars['String']>;
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsAddArgs = {
  lineItems: Array<CheckoutLineItemInput>;
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID'];
  lineItemIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsReplaceArgs = {
  lineItems: Array<CheckoutLineItemInput>;
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemUpdateInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingAddressUpdateArgs = {
  shippingAddress: MailingAddressInput;
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingAddressUpdateV2Args = {
  shippingAddress: MailingAddressInput;
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingLineUpdateArgs = {
  checkoutId: Scalars['ID'];
  shippingRateHandle: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenCreateArgs = {
  input: CustomerAccessTokenCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerActivateArgs = {
  id: Scalars['ID'];
  input: CustomerActivateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL'];
  password: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressCreateArgs = {
  customerAccessToken: Scalars['String'];
  address: MailingAddressInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressDeleteArgs = {
  id: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressUpdateArgs = {
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
  address: MailingAddressInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerCreateArgs = {
  input: CustomerCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerDefaultAddressUpdateArgs = {
  customerAccessToken: Scalars['String'];
  addressId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerRecoverArgs = {
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerResetArgs = {
  id: Scalars['ID'];
  input: CustomerResetInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerResetByUrlArgs = {
  resetUrl: Scalars['URL'];
  password: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerUpdateArgs = {
  customerAccessToken: Scalars['String'];
  customer: CustomerUpdateInput;
};

/** An object with an ID to support global identification. */
export type Node = {
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type Order = Node & HasMetafields & {
  __typename?: 'Order';
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<OrderCancelReason>;
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The code of the currency used for the payment. */
  currencyCode: CurrencyCode;
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: MoneyV2;
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<MoneyV2>;
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: MoneyV2;
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: MoneyV2;
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>;
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>;
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnection;
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The financial status of the order. */
  financialStatus?: Maybe<OrderFinancialStatus>;
  /** The fulfillment status for the order. */
  fulfillmentStatus: OrderFulfillmentStatus;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of the order’s line items. */
  lineItems: OrderLineItemConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   */
  name: Scalars['String'];
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int'];
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<MoneyV2>;
  /** The total price of the order before any applied edits. */
  originalTotalPrice: MoneyV2;
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   */
  processedAt: Scalars['DateTime'];
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddress>;
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<DiscountAllocation>;
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL'];
  /**
   * Price of the order before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice?: Maybe<Scalars['Money']>;
  /** Price of the order before duties, shipping and taxes. */
  subtotalPriceV2?: Maybe<MoneyV2>;
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<Fulfillment>>;
  /**
   * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money'];
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPriceV2: MoneyV2;
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefundedV2` instead
   */
  totalRefunded: Scalars['Money'];
  /** The total amount that has been refunded. */
  totalRefundedV2: MoneyV2;
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPriceV2` instead
   */
  totalShippingPrice: Scalars['Money'];
  /** The total cost of shipping. */
  totalShippingPriceV2: MoneyV2;
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax?: Maybe<Scalars['Money']>;
  /** The total cost of taxes. */
  totalTaxV2?: Maybe<MoneyV2>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderDiscountApplicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderSuccessfulFulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>;
};

/** Represents the reason for the order's cancellation. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER'
}

/** An auto-generated type for paginating through multiple Orders. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Order and a cursor during pagination. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderEdge. */
  node: Order;
};

/** Represents the order's current financial status. */
export enum OrderFinancialStatus {
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED'
}

/** Represents the order's current fulfillment status. */
export enum OrderFulfillmentStatus {
  /** Displayed as **Unfulfilled**. */
  Unfulfilled = 'UNFULFILLED',
  /** Displayed as **Partially fulfilled**. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Fulfilled**. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **Restocked**. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Pending fulfillment**. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Open**. */
  Open = 'OPEN',
  /** Displayed as **In progress**. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Scheduled**. */
  Scheduled = 'SCHEDULED'
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export type OrderLineItem = {
  __typename?: 'OrderLineItem';
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int'];
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>;
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>;
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2;
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: MoneyV2;
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int'];
  /** The title of the product combined with title of the variant. */
  title: Scalars['String'];
  /** The product variant object associated to the line item. */
  variant?: Maybe<ProductVariant>;
};

/** An auto-generated type for paginating through multiple OrderLineItems. */
export type OrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection';
  /** A list of edges. */
  edges: Array<OrderLineItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one OrderLineItem and a cursor during pagination. */
export type OrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItem;
};

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeys {
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type Page = Node & HasMetafields & {
  __typename?: 'Page';
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML'];
  /** Summary of the page body. */
  bodySummary: Scalars['String'];
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime'];
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** The page's SEO information. */
  seo?: Maybe<Seo>;
  /** The title of the page. */
  title: Scalars['String'];
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime'];
  /**
   * The url pointing to the page accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead
   */
  url: Scalars['URL'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple Pages. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Page and a cursor during pagination. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PageEdge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Indicates if there are more pages to fetch. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates if there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
};

/** The set of valid sort keys for the Page query. */
export enum PageSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** A payment applied to a checkout. */
export type Payment = Node & {
  __typename?: 'Payment';
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money'];
  /** The amount of the payment. */
  amountV2: MoneyV2;
  /** The billing address for the payment. */
  billingAddress?: Maybe<MailingAddress>;
  /** The checkout to which the payment belongs. */
  checkout: Checkout;
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<CreditCard>;
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests).
   */
  idempotencyKey?: Maybe<Scalars['String']>;
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>;
  /** Whether or not the payment is still processing asynchronously. */
  ready: Scalars['Boolean'];
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean'];
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<Transaction>;
};

/** Settings related to payments. */
export type PaymentSettings = {
  __typename?: 'PaymentSettings';
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrand>;
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL'];
  /** The country where the shop is located. */
  countryCode: CountryCode;
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode;
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<CurrencyCode>;
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>;
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>;
};

/** The valid values for the types of payment token. */
export enum PaymentTokenType {
  /** Apple Pay token type. */
  ApplePay = 'APPLE_PAY',
  /** Vault payment token type. */
  Vault = 'VAULT',
  /** Shopify Pay token type. */
  ShopifyPay = 'SHOPIFY_PAY',
  /** Google Pay token type. */
  GooglePay = 'GOOGLE_PAY'
}

/** The value of the percentage pricing object. */
export type PricingPercentageValue = {
  __typename?: 'PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The price value (fixed or percentage) for a discount application. */
export type PricingValue = MoneyV2 | PricingPercentageValue;

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type Product = Node & HasMetafields & {
  __typename?: 'Product';
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** List of collections a product belongs to. */
  collections: CollectionConnection;
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ProductPriceRange;
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of images associated with the product. */
  images: ImageConnection;
  /** The media associated with the product. */
  media: MediaConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of product options. */
  options: Array<ProductOption>;
  /**
   * List of price ranges in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentPriceRanges: ProductPriceRangeConnection;
  /** The price range. */
  priceRange: ProductPriceRange;
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String'];
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime'];
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean'];
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: SellingPlanGroupConnection;
  /** The product's SEO information. */
  seo: Seo;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: Array<Scalars['String']>;
  /** The product’s title. */
  title: Scalars['String'];
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: Scalars['DateTime'];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions?: Maybe<ProductVariant>;
  /** List of the product’s variants. */
  variants: ProductVariantConnection;
  /** The product’s vendor name. */
  vendor: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductImageSortKeys>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMediaArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductMediaSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductOptionsArgs = {
  first?: Maybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductPresentmentPriceRangesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductSellingPlanGroupsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<SelectedOptionInput>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductVariantSortKeys>;
};

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** An auto-generated type for paginating through multiple Products. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one Product and a cursor during pagination. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: Product;
};

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeys {
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export type ProductOption = Node & {
  __typename?: 'ProductOption';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The product option’s name. */
  name: Scalars['String'];
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>;
};

/** The price range of the product. */
export type ProductPriceRange = {
  __typename?: 'ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2;
};

/** An auto-generated type for paginating through multiple ProductPriceRanges. */
export type ProductPriceRangeConnection = {
  __typename?: 'ProductPriceRangeConnection';
  /** A list of edges. */
  edges: Array<ProductPriceRangeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one ProductPriceRange and a cursor during pagination. */
export type ProductPriceRangeEdge = {
  __typename?: 'ProductPriceRangeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductPriceRangeEdge. */
  node: ProductPriceRange;
};

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariant = Node & HasMetafields & {
  __typename?: 'ProductVariant';
  /**
   * Indicates if the product variant is in stock.
   * @deprecated Use `availableForSale` instead
   */
  available?: Maybe<Scalars['Boolean']>;
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead
   */
  compareAtPrice?: Maybe<Scalars['Money']>;
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
  compareAtPriceV2?: Maybe<MoneyV2>;
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the product variant. This field falls back to the product image if no image is available. */
  image?: Maybe<Image>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentPrices: ProductVariantPricePairConnection;
  /**
   * List of unit prices in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentUnitPrices: MoneyV2Connection;
  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money'];
  /** The product variant’s price. */
  priceV2: MoneyV2;
  /** The product object that the product variant belongs to. */
  product: Product;
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>;
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: SellingPlanAllocationConnection;
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StoreAvailabilityConnection;
  /** The product variant’s title. */
  title: Scalars['String'];
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<MoneyV2>;
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>;
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>;
  /** Unit of measurement for weight. */
  weightUnit: WeightUnit;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  crop?: Maybe<CropRegion>;
  scale?: Maybe<Scalars['Int']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantPresentmentPricesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantPresentmentUnitPricesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantSellingPlanAllocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantStoreAvailabilityArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple ProductVariants. */
export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** A list of edges. */
  edges: Array<ProductVariantEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one ProductVariant and a cursor during pagination. */
export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant;
};

/** The compare-at price and price of a variant sharing a currency. */
export type ProductVariantPricePair = {
  __typename?: 'ProductVariantPricePair';
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>;
  /** The price of the variant with associated currency. */
  price: MoneyV2;
};

/** An auto-generated type for paginating through multiple ProductVariantPricePairs. */
export type ProductVariantPricePairConnection = {
  __typename?: 'ProductVariantPricePairConnection';
  /** A list of edges. */
  edges: Array<ProductVariantPricePairEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination. */
export type ProductVariantPricePairEdge = {
  __typename?: 'ProductVariantPricePairEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair;
};

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE'
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoot = {
  __typename?: 'QueryRoot';
  /** List of the shop's articles. */
  articles: ArticleConnection;
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead
   */
  blogByHandle?: Maybe<Blog>;
  /** List of the shop's blogs. */
  blogs: BlogConnection;
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead
   */
  collectionByHandle?: Maybe<Collection>;
  /** List of the shop’s collections. */
  collections: CollectionConnection;
  /** Find a customer by its access token. */
  customer?: Maybe<Customer>;
  /** Returns the localized experiences configured for the shop. */
  localization: Localization;
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   */
  locations: LocationConnection;
  /** Returns a specific node by ID. */
  node?: Maybe<Node>;
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>;
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead
   */
  pageByHandle?: Maybe<Page>;
  /** List of the shop's pages. */
  pages: PageConnection;
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead
   */
  productByHandle?: Maybe<Product>;
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   */
  productRecommendations?: Maybe<Array<Product>>;
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   */
  productTags: StringConnection;
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StringConnection;
  /** List of the shop’s products. */
  products: ProductConnection;
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>;
  /** The shop associated with the storefront access token. */
  shop: Shop;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootArticlesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ArticleSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<BlogSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CollectionSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomerArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<LocationSortKeys>;
  near?: Maybe<GeoCoordinateInput>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodeArgs = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPageByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<PageSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductRecommendationsArgs = {
  productId: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTagsArgs = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTypesArgs = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** SEO information. */
export type Seo = {
  __typename?: 'SEO';
  /** The meta description. */
  description?: Maybe<Scalars['String']>;
  /** The SEO title. */
  title?: Maybe<Scalars['String']>;
};

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 */
export type ScriptDiscountApplication = DiscountApplication & {
  __typename?: 'ScriptDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod;
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
   */
  description: Scalars['String'];
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType;
  /** The title of the application as defined by the Script. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValue;
};

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
export type SelectedOption = {
  __typename?: 'SelectedOption';
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Specifies the input fields required for a selected option. */
export type SelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Represents how products and variants can be sold and purchased. */
export type SellingPlan = {
  __typename?: 'SellingPlan';
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanOption>;
  /** Represents how a selling plan affects pricing when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>;
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean'];
};

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export type SellingPlanAllocation = {
  __typename?: 'SellingPlanAllocation';
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustment>;
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlan;
};

/** An auto-generated type for paginating through multiple SellingPlanAllocations. */
export type SellingPlanAllocationConnection = {
  __typename?: 'SellingPlanAllocationConnection';
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination. */
export type SellingPlanAllocationEdge = {
  __typename?: 'SellingPlanAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocation;
};

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export type SellingPlanAllocationPriceAdjustment = {
  __typename?: 'SellingPlanAllocationPriceAdjustment';
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2;
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2;
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2;
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<MoneyV2>;
};

/** An auto-generated type for paginating through multiple SellingPlans. */
export type SellingPlanConnection = {
  __typename?: 'SellingPlanConnection';
  /** A list of edges. */
  edges: Array<SellingPlanEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one SellingPlan and a cursor during pagination. */
export type SellingPlanEdge = {
  __typename?: 'SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan;
};

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export type SellingPlanFixedAmountPriceAdjustment = {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment';
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2;
};

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export type SellingPlanFixedPriceAdjustment = {
  __typename?: 'SellingPlanFixedPriceAdjustment';
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2;
};

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type SellingPlanGroup = {
  __typename?: 'SellingPlanGroup';
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>;
  /** The name of the selling plan group. */
  name: Scalars['String'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>;
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection;
};


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type SellingPlanGroupSellingPlansArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

/** An auto-generated type for paginating through multiple SellingPlanGroups. */
export type SellingPlanGroupConnection = {
  __typename?: 'SellingPlanGroupConnection';
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one SellingPlanGroup and a cursor during pagination. */
export type SellingPlanGroupEdge = {
  __typename?: 'SellingPlanGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup;
};

/** Represents an option on a selling plan group that's available in the drop-down list in the storefront. */
export type SellingPlanGroupOption = {
  __typename?: 'SellingPlanGroupOption';
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String'];
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>;
};

/** An option provided by a Selling Plan. */
export type SellingPlanOption = {
  __typename?: 'SellingPlanOption';
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>;
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>;
};

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export type SellingPlanPercentagePriceAdjustment = {
  __typename?: 'SellingPlanPercentagePriceAdjustment';
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int'];
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustment = {
  __typename?: 'SellingPlanPriceAdjustment';
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue;
  /** The number of orders that the price adjustment applies to If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>;
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment;

/** A shipping rate to be applied to a checkout. */
export type ShippingRate = {
  __typename?: 'ShippingRate';
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'];
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money'];
  /** Price of this shipping rate. */
  priceV2: MoneyV2;
  /** Title of this shipping rate. */
  title: Scalars['String'];
};

/** Shop represents a collection of the general settings and information about the shop. */
export type Shop = HasMetafields & {
  __typename?: 'Shop';
  /**
   * List of the shop' articles.
   * @deprecated Use `QueryRoot.articles` instead.
   */
  articles: ArticleConnection;
  /**
   * List of the shop' blogs.
   * @deprecated Use `QueryRoot.blogs` instead.
   */
  blogs: BlogConnection;
  /**
   * Find a collection by its handle.
   * @deprecated Use `QueryRoot.collectionByHandle` instead.
   */
  collectionByHandle?: Maybe<Collection>;
  /**
   * List of the shop’s collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: CollectionConnection;
  /**
   * The three-letter code for the currency that the shop accepts.
   * @deprecated Use `paymentSettings` instead
   */
  currencyCode: CurrencyCode;
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>;
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection;
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String'];
  /** The shop’s name. */
  name: Scalars['String'];
  /** Settings related to payments. */
  paymentSettings: PaymentSettings;
  /** The shop’s primary domain. */
  primaryDomain: Domain;
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopPolicy>;
  /**
   * Find a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle?: Maybe<Product>;
  /**
   * A list of tags that have been added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   * @deprecated Use `QueryRoot.productTags` instead.
   */
  productTags: StringConnection;
  /**
   * List of the shop’s product types.
   * @deprecated Use `QueryRoot.productTypes` instead.
   */
  productTypes: StringConnection;
  /**
   * List of the shop’s products.
   * @deprecated Use `QueryRoot.products` instead.
   */
  products: ProductConnection;
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopPolicy>;
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopPolicy>;
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>;
  /**
   * The shop’s Shopify Payments account id.
   * @deprecated Use `paymentSettings` instead
   */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>;
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicy>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopArticlesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ArticleSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopBlogsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<BlogSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopCollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<CollectionSortKeys>;
  query?: Maybe<Scalars['String']>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopMetafieldArgs = {
  namespace: Scalars['String'];
  key: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopProductByHandleArgs = {
  handle: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopProductTagsArgs = {
  first: Scalars['Int'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopProductTypesArgs = {
  first: Scalars['Int'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
  sortKey?: Maybe<ProductSortKeys>;
  query?: Maybe<Scalars['String']>;
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopPolicy = Node & {
  __typename?: 'ShopPolicy';
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String'];
  /** Policy’s handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Policy’s title. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
};

/** Describes the availability of a product variant at a particular location. */
export type StoreAvailability = {
  __typename?: 'StoreAvailability';
  /** Whether or not this product variant is in-stock at this location. */
  available: Scalars['Boolean'];
  /** The location where this product variant is stocked at. */
  location: Location;
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String'];
};

/** An auto-generated type for paginating through multiple StoreAvailabilities. */
export type StoreAvailabilityConnection = {
  __typename?: 'StoreAvailabilityConnection';
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one StoreAvailability and a cursor during pagination. */
export type StoreAvailabilityEdge = {
  __typename?: 'StoreAvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability;
};

/** An auto-generated type for paginating through multiple Strings. */
export type StringConnection = {
  __typename?: 'StringConnection';
  /** A list of edges. */
  edges: Array<StringEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An auto-generated type which holds one String and a cursor during pagination. */
export type StringEdge = {
  __typename?: 'StringEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export type TokenizedPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money'];
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** The type of payment token. */
  type: Scalars['String'];
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>;
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>;
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export type TokenizedPaymentInputV2 = {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>;
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>;
  /** The type of payment token. */
  type: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export type TokenizedPaymentInputV3 = {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/concepts/about-apis/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>;
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>;
  /** The type of payment token. */
  type: PaymentTokenType;
};

/** An object representing exchange of money for a product or service. */
export type Transaction = {
  __typename?: 'Transaction';
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money'];
  /** The amount of money that the transaction was for. */
  amountV2: MoneyV2;
  /** The kind of the transaction. */
  kind: TransactionKind;
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: TransactionStatus;
  /** The status of the transaction. */
  statusV2?: Maybe<TransactionStatus>;
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean'];
};

/** The different kinds of order transactions. */
export enum TransactionKind {
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   */
  Authorization = 'AUTHORIZATION',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE'
}

/** Transaction statuses describe the status of a transaction. */
export enum TransactionStatus {
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** There was an error while processing the transaction. */
  Error = 'ERROR'
}


/** The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml). */
export type UnitPriceMeasurement = {
  __typename?: 'UnitPriceMeasurement';
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredType>;
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>;
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float'];
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>;
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int'];
};

/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing areas. */
  Area = 'AREA'
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnit {
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** Metric system unit of volume. */
  L = 'L',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2'
}

/** Systems of weights and measures. */
export enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM'
}

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a Shopify hosted video. */
export type Video = Node & Media & {
  __typename?: 'Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<Image>;
  /** The sources for a video. */
  sources: Array<VideoSource>;
};

/** Represents a source for a Shopify hosted video. */
export type VideoSource = {
  __typename?: 'VideoSource';
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
};

/** Units of measurement for weight. */
export enum WeightUnit {
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ApiVersion: ResolverTypeWrapper<ApiVersion>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AppliedGiftCard: ResolverTypeWrapper<AppliedGiftCard>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Article: ResolverTypeWrapper<Article>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ArticleAuthor: ResolverTypeWrapper<ArticleAuthor>;
  ArticleConnection: ResolverTypeWrapper<ArticleConnection>;
  ArticleEdge: ResolverTypeWrapper<ArticleEdge>;
  ArticleSortKeys: ArticleSortKeys;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeInput: AttributeInput;
  AutomaticDiscountApplication: ResolverTypeWrapper<Omit<AutomaticDiscountApplication, 'value'> & { value: ResolversTypes['PricingValue'] }>;
  AvailableShippingRates: ResolverTypeWrapper<AvailableShippingRates>;
  Blog: ResolverTypeWrapper<Blog>;
  BlogConnection: ResolverTypeWrapper<BlogConnection>;
  BlogEdge: ResolverTypeWrapper<BlogEdge>;
  BlogSortKeys: BlogSortKeys;
  CardBrand: CardBrand;
  Checkout: ResolverTypeWrapper<Checkout>;
  CheckoutAttributesUpdateInput: CheckoutAttributesUpdateInput;
  CheckoutAttributesUpdatePayload: ResolverTypeWrapper<CheckoutAttributesUpdatePayload>;
  CheckoutAttributesUpdateV2Input: CheckoutAttributesUpdateV2Input;
  CheckoutAttributesUpdateV2Payload: ResolverTypeWrapper<CheckoutAttributesUpdateV2Payload>;
  CheckoutBuyerIdentity: ResolverTypeWrapper<CheckoutBuyerIdentity>;
  CheckoutBuyerIdentityInput: CheckoutBuyerIdentityInput;
  CheckoutCompleteFreePayload: ResolverTypeWrapper<CheckoutCompleteFreePayload>;
  CheckoutCompleteWithCreditCardPayload: ResolverTypeWrapper<CheckoutCompleteWithCreditCardPayload>;
  CheckoutCompleteWithCreditCardV2Payload: ResolverTypeWrapper<CheckoutCompleteWithCreditCardV2Payload>;
  CheckoutCompleteWithTokenizedPaymentPayload: ResolverTypeWrapper<CheckoutCompleteWithTokenizedPaymentPayload>;
  CheckoutCompleteWithTokenizedPaymentV2Payload: ResolverTypeWrapper<CheckoutCompleteWithTokenizedPaymentV2Payload>;
  CheckoutCompleteWithTokenizedPaymentV3Payload: ResolverTypeWrapper<CheckoutCompleteWithTokenizedPaymentV3Payload>;
  CheckoutCreateInput: CheckoutCreateInput;
  CheckoutCreatePayload: ResolverTypeWrapper<CheckoutCreatePayload>;
  CheckoutCustomerAssociatePayload: ResolverTypeWrapper<CheckoutCustomerAssociatePayload>;
  CheckoutCustomerAssociateV2Payload: ResolverTypeWrapper<CheckoutCustomerAssociateV2Payload>;
  CheckoutCustomerDisassociatePayload: ResolverTypeWrapper<CheckoutCustomerDisassociatePayload>;
  CheckoutCustomerDisassociateV2Payload: ResolverTypeWrapper<CheckoutCustomerDisassociateV2Payload>;
  CheckoutDiscountCodeApplyPayload: ResolverTypeWrapper<CheckoutDiscountCodeApplyPayload>;
  CheckoutDiscountCodeApplyV2Payload: ResolverTypeWrapper<CheckoutDiscountCodeApplyV2Payload>;
  CheckoutDiscountCodeRemovePayload: ResolverTypeWrapper<CheckoutDiscountCodeRemovePayload>;
  CheckoutEmailUpdatePayload: ResolverTypeWrapper<CheckoutEmailUpdatePayload>;
  CheckoutEmailUpdateV2Payload: ResolverTypeWrapper<CheckoutEmailUpdateV2Payload>;
  CheckoutErrorCode: CheckoutErrorCode;
  CheckoutGiftCardApplyPayload: ResolverTypeWrapper<CheckoutGiftCardApplyPayload>;
  CheckoutGiftCardRemovePayload: ResolverTypeWrapper<CheckoutGiftCardRemovePayload>;
  CheckoutGiftCardRemoveV2Payload: ResolverTypeWrapper<CheckoutGiftCardRemoveV2Payload>;
  CheckoutGiftCardsAppendPayload: ResolverTypeWrapper<CheckoutGiftCardsAppendPayload>;
  CheckoutLineItem: ResolverTypeWrapper<CheckoutLineItem>;
  CheckoutLineItemConnection: ResolverTypeWrapper<CheckoutLineItemConnection>;
  CheckoutLineItemEdge: ResolverTypeWrapper<CheckoutLineItemEdge>;
  CheckoutLineItemInput: CheckoutLineItemInput;
  CheckoutLineItemUpdateInput: CheckoutLineItemUpdateInput;
  CheckoutLineItemsAddPayload: ResolverTypeWrapper<CheckoutLineItemsAddPayload>;
  CheckoutLineItemsRemovePayload: ResolverTypeWrapper<CheckoutLineItemsRemovePayload>;
  CheckoutLineItemsReplacePayload: ResolverTypeWrapper<CheckoutLineItemsReplacePayload>;
  CheckoutLineItemsUpdatePayload: ResolverTypeWrapper<CheckoutLineItemsUpdatePayload>;
  CheckoutShippingAddressUpdatePayload: ResolverTypeWrapper<CheckoutShippingAddressUpdatePayload>;
  CheckoutShippingAddressUpdateV2Payload: ResolverTypeWrapper<CheckoutShippingAddressUpdateV2Payload>;
  CheckoutShippingLineUpdatePayload: ResolverTypeWrapper<CheckoutShippingLineUpdatePayload>;
  CheckoutUserError: ResolverTypeWrapper<CheckoutUserError>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
  CollectionSortKeys: CollectionSortKeys;
  Comment: ResolverTypeWrapper<Comment>;
  CommentAuthor: ResolverTypeWrapper<CommentAuthor>;
  CommentConnection: ResolverTypeWrapper<CommentConnection>;
  CommentEdge: ResolverTypeWrapper<CommentEdge>;
  Country: ResolverTypeWrapper<Country>;
  CountryCode: CountryCode;
  CreditCard: ResolverTypeWrapper<CreditCard>;
  CreditCardPaymentInput: CreditCardPaymentInput;
  CreditCardPaymentInputV2: CreditCardPaymentInputV2;
  CropRegion: CropRegion;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyCode: CurrencyCode;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerAccessToken: ResolverTypeWrapper<CustomerAccessToken>;
  CustomerAccessTokenCreateInput: CustomerAccessTokenCreateInput;
  CustomerAccessTokenCreatePayload: ResolverTypeWrapper<CustomerAccessTokenCreatePayload>;
  CustomerAccessTokenCreateWithMultipassPayload: ResolverTypeWrapper<CustomerAccessTokenCreateWithMultipassPayload>;
  CustomerAccessTokenDeletePayload: ResolverTypeWrapper<CustomerAccessTokenDeletePayload>;
  CustomerAccessTokenRenewPayload: ResolverTypeWrapper<CustomerAccessTokenRenewPayload>;
  CustomerActivateByUrlPayload: ResolverTypeWrapper<CustomerActivateByUrlPayload>;
  CustomerActivateInput: CustomerActivateInput;
  CustomerActivatePayload: ResolverTypeWrapper<CustomerActivatePayload>;
  CustomerAddressCreatePayload: ResolverTypeWrapper<CustomerAddressCreatePayload>;
  CustomerAddressDeletePayload: ResolverTypeWrapper<CustomerAddressDeletePayload>;
  CustomerAddressUpdatePayload: ResolverTypeWrapper<CustomerAddressUpdatePayload>;
  CustomerCreateInput: CustomerCreateInput;
  CustomerCreatePayload: ResolverTypeWrapper<CustomerCreatePayload>;
  CustomerDefaultAddressUpdatePayload: ResolverTypeWrapper<CustomerDefaultAddressUpdatePayload>;
  CustomerErrorCode: CustomerErrorCode;
  CustomerRecoverPayload: ResolverTypeWrapper<CustomerRecoverPayload>;
  CustomerResetByUrlPayload: ResolverTypeWrapper<CustomerResetByUrlPayload>;
  CustomerResetInput: CustomerResetInput;
  CustomerResetPayload: ResolverTypeWrapper<CustomerResetPayload>;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerUpdatePayload: ResolverTypeWrapper<CustomerUpdatePayload>;
  CustomerUserError: ResolverTypeWrapper<CustomerUserError>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']>;
  DigitalWallet: DigitalWallet;
  DiscountAllocation: ResolverTypeWrapper<DiscountAllocation>;
  DiscountApplication: ResolversTypes['AutomaticDiscountApplication'] | ResolversTypes['DiscountCodeApplication'] | ResolversTypes['ManualDiscountApplication'] | ResolversTypes['ScriptDiscountApplication'];
  DiscountApplicationAllocationMethod: DiscountApplicationAllocationMethod;
  DiscountApplicationConnection: ResolverTypeWrapper<DiscountApplicationConnection>;
  DiscountApplicationEdge: ResolverTypeWrapper<DiscountApplicationEdge>;
  DiscountApplicationTargetSelection: DiscountApplicationTargetSelection;
  DiscountApplicationTargetType: DiscountApplicationTargetType;
  DiscountCodeApplication: ResolverTypeWrapper<Omit<DiscountCodeApplication, 'value'> & { value: ResolversTypes['PricingValue'] }>;
  DisplayableError: ResolversTypes['CheckoutUserError'] | ResolversTypes['CustomerUserError'] | ResolversTypes['UserError'];
  Domain: ResolverTypeWrapper<Domain>;
  ExternalVideo: ResolverTypeWrapper<ExternalVideo>;
  Fulfillment: ResolverTypeWrapper<Fulfillment>;
  FulfillmentLineItem: ResolverTypeWrapper<FulfillmentLineItem>;
  FulfillmentLineItemConnection: ResolverTypeWrapper<FulfillmentLineItemConnection>;
  FulfillmentLineItemEdge: ResolverTypeWrapper<FulfillmentLineItemEdge>;
  FulfillmentTrackingInfo: ResolverTypeWrapper<FulfillmentTrackingInfo>;
  GeoCoordinateInput: GeoCoordinateInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HTML: ResolverTypeWrapper<Scalars['HTML']>;
  HasMetafields: ResolversTypes['Article'] | ResolversTypes['Blog'] | ResolversTypes['Collection'] | ResolversTypes['Customer'] | ResolversTypes['Order'] | ResolversTypes['Page'] | ResolversTypes['Product'] | ResolversTypes['ProductVariant'] | ResolversTypes['Shop'];
  Image: ResolverTypeWrapper<Image>;
  ImageConnection: ResolverTypeWrapper<ImageConnection>;
  ImageContentType: ImageContentType;
  ImageEdge: ResolverTypeWrapper<ImageEdge>;
  Localization: ResolverTypeWrapper<Localization>;
  Location: ResolverTypeWrapper<Location>;
  LocationAddress: ResolverTypeWrapper<LocationAddress>;
  LocationConnection: ResolverTypeWrapper<LocationConnection>;
  LocationEdge: ResolverTypeWrapper<LocationEdge>;
  LocationSortKeys: LocationSortKeys;
  MailingAddress: ResolverTypeWrapper<MailingAddress>;
  MailingAddressConnection: ResolverTypeWrapper<MailingAddressConnection>;
  MailingAddressEdge: ResolverTypeWrapper<MailingAddressEdge>;
  MailingAddressInput: MailingAddressInput;
  ManualDiscountApplication: ResolverTypeWrapper<Omit<ManualDiscountApplication, 'value'> & { value: ResolversTypes['PricingValue'] }>;
  Media: ResolversTypes['ExternalVideo'] | ResolversTypes['MediaImage'] | ResolversTypes['Model3d'] | ResolversTypes['Video'];
  MediaConnection: ResolverTypeWrapper<MediaConnection>;
  MediaContentType: MediaContentType;
  MediaEdge: ResolverTypeWrapper<MediaEdge>;
  MediaHost: MediaHost;
  MediaImage: ResolverTypeWrapper<MediaImage>;
  Metafield: ResolverTypeWrapper<Omit<Metafield, 'parentResource'> & { parentResource: ResolversTypes['MetafieldParentResource'] }>;
  MetafieldConnection: ResolverTypeWrapper<MetafieldConnection>;
  MetafieldEdge: ResolverTypeWrapper<MetafieldEdge>;
  MetafieldParentResource: ResolversTypes['Article'] | ResolversTypes['Blog'] | ResolversTypes['Collection'] | ResolversTypes['Customer'] | ResolversTypes['Order'] | ResolversTypes['Page'] | ResolversTypes['Product'] | ResolversTypes['ProductVariant'] | ResolversTypes['Shop'];
  MetafieldValueType: MetafieldValueType;
  Model3d: ResolverTypeWrapper<Model3d>;
  Model3dSource: ResolverTypeWrapper<Model3dSource>;
  Money: ResolverTypeWrapper<Scalars['Money']>;
  MoneyInput: MoneyInput;
  MoneyV2: ResolverTypeWrapper<MoneyV2>;
  MoneyV2Connection: ResolverTypeWrapper<MoneyV2Connection>;
  MoneyV2Edge: ResolverTypeWrapper<MoneyV2Edge>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['AppliedGiftCard'] | ResolversTypes['Article'] | ResolversTypes['Blog'] | ResolversTypes['Checkout'] | ResolversTypes['CheckoutLineItem'] | ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['ExternalVideo'] | ResolversTypes['Location'] | ResolversTypes['MailingAddress'] | ResolversTypes['MediaImage'] | ResolversTypes['Metafield'] | ResolversTypes['Model3d'] | ResolversTypes['Order'] | ResolversTypes['Page'] | ResolversTypes['Payment'] | ResolversTypes['Product'] | ResolversTypes['ProductOption'] | ResolversTypes['ProductVariant'] | ResolversTypes['ShopPolicy'] | ResolversTypes['Video'];
  Order: ResolverTypeWrapper<Order>;
  OrderCancelReason: OrderCancelReason;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  OrderEdge: ResolverTypeWrapper<OrderEdge>;
  OrderFinancialStatus: OrderFinancialStatus;
  OrderFulfillmentStatus: OrderFulfillmentStatus;
  OrderLineItem: ResolverTypeWrapper<OrderLineItem>;
  OrderLineItemConnection: ResolverTypeWrapper<OrderLineItemConnection>;
  OrderLineItemEdge: ResolverTypeWrapper<OrderLineItemEdge>;
  OrderSortKeys: OrderSortKeys;
  Page: ResolverTypeWrapper<Page>;
  PageConnection: ResolverTypeWrapper<PageConnection>;
  PageEdge: ResolverTypeWrapper<PageEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageSortKeys: PageSortKeys;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentSettings: ResolverTypeWrapper<PaymentSettings>;
  PaymentTokenType: PaymentTokenType;
  PricingPercentageValue: ResolverTypeWrapper<PricingPercentageValue>;
  PricingValue: ResolversTypes['MoneyV2'] | ResolversTypes['PricingPercentageValue'];
  Product: ResolverTypeWrapper<Product>;
  ProductCollectionSortKeys: ProductCollectionSortKeys;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductImageSortKeys: ProductImageSortKeys;
  ProductMediaSortKeys: ProductMediaSortKeys;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductPriceRange: ResolverTypeWrapper<ProductPriceRange>;
  ProductPriceRangeConnection: ResolverTypeWrapper<ProductPriceRangeConnection>;
  ProductPriceRangeEdge: ResolverTypeWrapper<ProductPriceRangeEdge>;
  ProductSortKeys: ProductSortKeys;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  ProductVariantConnection: ResolverTypeWrapper<ProductVariantConnection>;
  ProductVariantEdge: ResolverTypeWrapper<ProductVariantEdge>;
  ProductVariantPricePair: ResolverTypeWrapper<ProductVariantPricePair>;
  ProductVariantPricePairConnection: ResolverTypeWrapper<ProductVariantPricePairConnection>;
  ProductVariantPricePairEdge: ResolverTypeWrapper<ProductVariantPricePairEdge>;
  ProductVariantSortKeys: ProductVariantSortKeys;
  QueryRoot: ResolverTypeWrapper<{}>;
  SEO: ResolverTypeWrapper<Seo>;
  ScriptDiscountApplication: ResolverTypeWrapper<Omit<ScriptDiscountApplication, 'value'> & { value: ResolversTypes['PricingValue'] }>;
  SelectedOption: ResolverTypeWrapper<SelectedOption>;
  SelectedOptionInput: SelectedOptionInput;
  SellingPlan: ResolverTypeWrapper<SellingPlan>;
  SellingPlanAllocation: ResolverTypeWrapper<SellingPlanAllocation>;
  SellingPlanAllocationConnection: ResolverTypeWrapper<SellingPlanAllocationConnection>;
  SellingPlanAllocationEdge: ResolverTypeWrapper<SellingPlanAllocationEdge>;
  SellingPlanAllocationPriceAdjustment: ResolverTypeWrapper<SellingPlanAllocationPriceAdjustment>;
  SellingPlanConnection: ResolverTypeWrapper<SellingPlanConnection>;
  SellingPlanEdge: ResolverTypeWrapper<SellingPlanEdge>;
  SellingPlanFixedAmountPriceAdjustment: ResolverTypeWrapper<SellingPlanFixedAmountPriceAdjustment>;
  SellingPlanFixedPriceAdjustment: ResolverTypeWrapper<SellingPlanFixedPriceAdjustment>;
  SellingPlanGroup: ResolverTypeWrapper<SellingPlanGroup>;
  SellingPlanGroupConnection: ResolverTypeWrapper<SellingPlanGroupConnection>;
  SellingPlanGroupEdge: ResolverTypeWrapper<SellingPlanGroupEdge>;
  SellingPlanGroupOption: ResolverTypeWrapper<SellingPlanGroupOption>;
  SellingPlanOption: ResolverTypeWrapper<SellingPlanOption>;
  SellingPlanPercentagePriceAdjustment: ResolverTypeWrapper<SellingPlanPercentagePriceAdjustment>;
  SellingPlanPriceAdjustment: ResolverTypeWrapper<Omit<SellingPlanPriceAdjustment, 'adjustmentValue'> & { adjustmentValue: ResolversTypes['SellingPlanPriceAdjustmentValue'] }>;
  SellingPlanPriceAdjustmentValue: ResolversTypes['SellingPlanFixedAmountPriceAdjustment'] | ResolversTypes['SellingPlanFixedPriceAdjustment'] | ResolversTypes['SellingPlanPercentagePriceAdjustment'];
  ShippingRate: ResolverTypeWrapper<ShippingRate>;
  Shop: ResolverTypeWrapper<Shop>;
  ShopPolicy: ResolverTypeWrapper<ShopPolicy>;
  StoreAvailability: ResolverTypeWrapper<StoreAvailability>;
  StoreAvailabilityConnection: ResolverTypeWrapper<StoreAvailabilityConnection>;
  StoreAvailabilityEdge: ResolverTypeWrapper<StoreAvailabilityEdge>;
  StringConnection: ResolverTypeWrapper<StringConnection>;
  StringEdge: ResolverTypeWrapper<StringEdge>;
  TokenizedPaymentInput: TokenizedPaymentInput;
  TokenizedPaymentInputV2: TokenizedPaymentInputV2;
  TokenizedPaymentInputV3: TokenizedPaymentInputV3;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionKind: TransactionKind;
  TransactionStatus: TransactionStatus;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  UnitPriceMeasurement: ResolverTypeWrapper<UnitPriceMeasurement>;
  UnitPriceMeasurementMeasuredType: UnitPriceMeasurementMeasuredType;
  UnitPriceMeasurementMeasuredUnit: UnitPriceMeasurementMeasuredUnit;
  UnitSystem: UnitSystem;
  UserError: ResolverTypeWrapper<UserError>;
  Video: ResolverTypeWrapper<Video>;
  VideoSource: ResolverTypeWrapper<VideoSource>;
  WeightUnit: WeightUnit;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ApiVersion: ApiVersion;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  AppliedGiftCard: AppliedGiftCard;
  ID: Scalars['ID'];
  Article: Article;
  Int: Scalars['Int'];
  ArticleAuthor: ArticleAuthor;
  ArticleConnection: ArticleConnection;
  ArticleEdge: ArticleEdge;
  Attribute: Attribute;
  AttributeInput: AttributeInput;
  AutomaticDiscountApplication: Omit<AutomaticDiscountApplication, 'value'> & { value: ResolversParentTypes['PricingValue'] };
  AvailableShippingRates: AvailableShippingRates;
  Blog: Blog;
  BlogConnection: BlogConnection;
  BlogEdge: BlogEdge;
  Checkout: Checkout;
  CheckoutAttributesUpdateInput: CheckoutAttributesUpdateInput;
  CheckoutAttributesUpdatePayload: CheckoutAttributesUpdatePayload;
  CheckoutAttributesUpdateV2Input: CheckoutAttributesUpdateV2Input;
  CheckoutAttributesUpdateV2Payload: CheckoutAttributesUpdateV2Payload;
  CheckoutBuyerIdentity: CheckoutBuyerIdentity;
  CheckoutBuyerIdentityInput: CheckoutBuyerIdentityInput;
  CheckoutCompleteFreePayload: CheckoutCompleteFreePayload;
  CheckoutCompleteWithCreditCardPayload: CheckoutCompleteWithCreditCardPayload;
  CheckoutCompleteWithCreditCardV2Payload: CheckoutCompleteWithCreditCardV2Payload;
  CheckoutCompleteWithTokenizedPaymentPayload: CheckoutCompleteWithTokenizedPaymentPayload;
  CheckoutCompleteWithTokenizedPaymentV2Payload: CheckoutCompleteWithTokenizedPaymentV2Payload;
  CheckoutCompleteWithTokenizedPaymentV3Payload: CheckoutCompleteWithTokenizedPaymentV3Payload;
  CheckoutCreateInput: CheckoutCreateInput;
  CheckoutCreatePayload: CheckoutCreatePayload;
  CheckoutCustomerAssociatePayload: CheckoutCustomerAssociatePayload;
  CheckoutCustomerAssociateV2Payload: CheckoutCustomerAssociateV2Payload;
  CheckoutCustomerDisassociatePayload: CheckoutCustomerDisassociatePayload;
  CheckoutCustomerDisassociateV2Payload: CheckoutCustomerDisassociateV2Payload;
  CheckoutDiscountCodeApplyPayload: CheckoutDiscountCodeApplyPayload;
  CheckoutDiscountCodeApplyV2Payload: CheckoutDiscountCodeApplyV2Payload;
  CheckoutDiscountCodeRemovePayload: CheckoutDiscountCodeRemovePayload;
  CheckoutEmailUpdatePayload: CheckoutEmailUpdatePayload;
  CheckoutEmailUpdateV2Payload: CheckoutEmailUpdateV2Payload;
  CheckoutGiftCardApplyPayload: CheckoutGiftCardApplyPayload;
  CheckoutGiftCardRemovePayload: CheckoutGiftCardRemovePayload;
  CheckoutGiftCardRemoveV2Payload: CheckoutGiftCardRemoveV2Payload;
  CheckoutGiftCardsAppendPayload: CheckoutGiftCardsAppendPayload;
  CheckoutLineItem: CheckoutLineItem;
  CheckoutLineItemConnection: CheckoutLineItemConnection;
  CheckoutLineItemEdge: CheckoutLineItemEdge;
  CheckoutLineItemInput: CheckoutLineItemInput;
  CheckoutLineItemUpdateInput: CheckoutLineItemUpdateInput;
  CheckoutLineItemsAddPayload: CheckoutLineItemsAddPayload;
  CheckoutLineItemsRemovePayload: CheckoutLineItemsRemovePayload;
  CheckoutLineItemsReplacePayload: CheckoutLineItemsReplacePayload;
  CheckoutLineItemsUpdatePayload: CheckoutLineItemsUpdatePayload;
  CheckoutShippingAddressUpdatePayload: CheckoutShippingAddressUpdatePayload;
  CheckoutShippingAddressUpdateV2Payload: CheckoutShippingAddressUpdateV2Payload;
  CheckoutShippingLineUpdatePayload: CheckoutShippingLineUpdatePayload;
  CheckoutUserError: CheckoutUserError;
  Collection: Collection;
  CollectionConnection: CollectionConnection;
  CollectionEdge: CollectionEdge;
  Comment: Comment;
  CommentAuthor: CommentAuthor;
  CommentConnection: CommentConnection;
  CommentEdge: CommentEdge;
  Country: Country;
  CreditCard: CreditCard;
  CreditCardPaymentInput: CreditCardPaymentInput;
  CreditCardPaymentInputV2: CreditCardPaymentInputV2;
  Currency: Currency;
  Customer: Customer;
  CustomerAccessToken: CustomerAccessToken;
  CustomerAccessTokenCreateInput: CustomerAccessTokenCreateInput;
  CustomerAccessTokenCreatePayload: CustomerAccessTokenCreatePayload;
  CustomerAccessTokenCreateWithMultipassPayload: CustomerAccessTokenCreateWithMultipassPayload;
  CustomerAccessTokenDeletePayload: CustomerAccessTokenDeletePayload;
  CustomerAccessTokenRenewPayload: CustomerAccessTokenRenewPayload;
  CustomerActivateByUrlPayload: CustomerActivateByUrlPayload;
  CustomerActivateInput: CustomerActivateInput;
  CustomerActivatePayload: CustomerActivatePayload;
  CustomerAddressCreatePayload: CustomerAddressCreatePayload;
  CustomerAddressDeletePayload: CustomerAddressDeletePayload;
  CustomerAddressUpdatePayload: CustomerAddressUpdatePayload;
  CustomerCreateInput: CustomerCreateInput;
  CustomerCreatePayload: CustomerCreatePayload;
  CustomerDefaultAddressUpdatePayload: CustomerDefaultAddressUpdatePayload;
  CustomerRecoverPayload: CustomerRecoverPayload;
  CustomerResetByUrlPayload: CustomerResetByUrlPayload;
  CustomerResetInput: CustomerResetInput;
  CustomerResetPayload: CustomerResetPayload;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerUpdatePayload: CustomerUpdatePayload;
  CustomerUserError: CustomerUserError;
  DateTime: Scalars['DateTime'];
  Decimal: Scalars['Decimal'];
  DiscountAllocation: DiscountAllocation;
  DiscountApplication: ResolversParentTypes['AutomaticDiscountApplication'] | ResolversParentTypes['DiscountCodeApplication'] | ResolversParentTypes['ManualDiscountApplication'] | ResolversParentTypes['ScriptDiscountApplication'];
  DiscountApplicationConnection: DiscountApplicationConnection;
  DiscountApplicationEdge: DiscountApplicationEdge;
  DiscountCodeApplication: Omit<DiscountCodeApplication, 'value'> & { value: ResolversParentTypes['PricingValue'] };
  DisplayableError: ResolversParentTypes['CheckoutUserError'] | ResolversParentTypes['CustomerUserError'] | ResolversParentTypes['UserError'];
  Domain: Domain;
  ExternalVideo: ExternalVideo;
  Fulfillment: Fulfillment;
  FulfillmentLineItem: FulfillmentLineItem;
  FulfillmentLineItemConnection: FulfillmentLineItemConnection;
  FulfillmentLineItemEdge: FulfillmentLineItemEdge;
  FulfillmentTrackingInfo: FulfillmentTrackingInfo;
  GeoCoordinateInput: GeoCoordinateInput;
  Float: Scalars['Float'];
  HTML: Scalars['HTML'];
  HasMetafields: ResolversParentTypes['Article'] | ResolversParentTypes['Blog'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Customer'] | ResolversParentTypes['Order'] | ResolversParentTypes['Page'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductVariant'] | ResolversParentTypes['Shop'];
  Image: Image;
  ImageConnection: ImageConnection;
  ImageEdge: ImageEdge;
  Localization: Localization;
  Location: Location;
  LocationAddress: LocationAddress;
  LocationConnection: LocationConnection;
  LocationEdge: LocationEdge;
  MailingAddress: MailingAddress;
  MailingAddressConnection: MailingAddressConnection;
  MailingAddressEdge: MailingAddressEdge;
  MailingAddressInput: MailingAddressInput;
  ManualDiscountApplication: Omit<ManualDiscountApplication, 'value'> & { value: ResolversParentTypes['PricingValue'] };
  Media: ResolversParentTypes['ExternalVideo'] | ResolversParentTypes['MediaImage'] | ResolversParentTypes['Model3d'] | ResolversParentTypes['Video'];
  MediaConnection: MediaConnection;
  MediaEdge: MediaEdge;
  MediaImage: MediaImage;
  Metafield: Omit<Metafield, 'parentResource'> & { parentResource: ResolversParentTypes['MetafieldParentResource'] };
  MetafieldConnection: MetafieldConnection;
  MetafieldEdge: MetafieldEdge;
  MetafieldParentResource: ResolversParentTypes['Article'] | ResolversParentTypes['Blog'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Customer'] | ResolversParentTypes['Order'] | ResolversParentTypes['Page'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductVariant'] | ResolversParentTypes['Shop'];
  Model3d: Model3d;
  Model3dSource: Model3dSource;
  Money: Scalars['Money'];
  MoneyInput: MoneyInput;
  MoneyV2: MoneyV2;
  MoneyV2Connection: MoneyV2Connection;
  MoneyV2Edge: MoneyV2Edge;
  Mutation: {};
  Node: ResolversParentTypes['AppliedGiftCard'] | ResolversParentTypes['Article'] | ResolversParentTypes['Blog'] | ResolversParentTypes['Checkout'] | ResolversParentTypes['CheckoutLineItem'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['ExternalVideo'] | ResolversParentTypes['Location'] | ResolversParentTypes['MailingAddress'] | ResolversParentTypes['MediaImage'] | ResolversParentTypes['Metafield'] | ResolversParentTypes['Model3d'] | ResolversParentTypes['Order'] | ResolversParentTypes['Page'] | ResolversParentTypes['Payment'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductOption'] | ResolversParentTypes['ProductVariant'] | ResolversParentTypes['ShopPolicy'] | ResolversParentTypes['Video'];
  Order: Order;
  OrderConnection: OrderConnection;
  OrderEdge: OrderEdge;
  OrderLineItem: OrderLineItem;
  OrderLineItemConnection: OrderLineItemConnection;
  OrderLineItemEdge: OrderLineItemEdge;
  Page: Page;
  PageConnection: PageConnection;
  PageEdge: PageEdge;
  PageInfo: PageInfo;
  Payment: Payment;
  PaymentSettings: PaymentSettings;
  PricingPercentageValue: PricingPercentageValue;
  PricingValue: ResolversParentTypes['MoneyV2'] | ResolversParentTypes['PricingPercentageValue'];
  Product: Product;
  ProductConnection: ProductConnection;
  ProductEdge: ProductEdge;
  ProductOption: ProductOption;
  ProductPriceRange: ProductPriceRange;
  ProductPriceRangeConnection: ProductPriceRangeConnection;
  ProductPriceRangeEdge: ProductPriceRangeEdge;
  ProductVariant: ProductVariant;
  ProductVariantConnection: ProductVariantConnection;
  ProductVariantEdge: ProductVariantEdge;
  ProductVariantPricePair: ProductVariantPricePair;
  ProductVariantPricePairConnection: ProductVariantPricePairConnection;
  ProductVariantPricePairEdge: ProductVariantPricePairEdge;
  QueryRoot: {};
  SEO: Seo;
  ScriptDiscountApplication: Omit<ScriptDiscountApplication, 'value'> & { value: ResolversParentTypes['PricingValue'] };
  SelectedOption: SelectedOption;
  SelectedOptionInput: SelectedOptionInput;
  SellingPlan: SellingPlan;
  SellingPlanAllocation: SellingPlanAllocation;
  SellingPlanAllocationConnection: SellingPlanAllocationConnection;
  SellingPlanAllocationEdge: SellingPlanAllocationEdge;
  SellingPlanAllocationPriceAdjustment: SellingPlanAllocationPriceAdjustment;
  SellingPlanConnection: SellingPlanConnection;
  SellingPlanEdge: SellingPlanEdge;
  SellingPlanFixedAmountPriceAdjustment: SellingPlanFixedAmountPriceAdjustment;
  SellingPlanFixedPriceAdjustment: SellingPlanFixedPriceAdjustment;
  SellingPlanGroup: SellingPlanGroup;
  SellingPlanGroupConnection: SellingPlanGroupConnection;
  SellingPlanGroupEdge: SellingPlanGroupEdge;
  SellingPlanGroupOption: SellingPlanGroupOption;
  SellingPlanOption: SellingPlanOption;
  SellingPlanPercentagePriceAdjustment: SellingPlanPercentagePriceAdjustment;
  SellingPlanPriceAdjustment: Omit<SellingPlanPriceAdjustment, 'adjustmentValue'> & { adjustmentValue: ResolversParentTypes['SellingPlanPriceAdjustmentValue'] };
  SellingPlanPriceAdjustmentValue: ResolversParentTypes['SellingPlanFixedAmountPriceAdjustment'] | ResolversParentTypes['SellingPlanFixedPriceAdjustment'] | ResolversParentTypes['SellingPlanPercentagePriceAdjustment'];
  ShippingRate: ShippingRate;
  Shop: Shop;
  ShopPolicy: ShopPolicy;
  StoreAvailability: StoreAvailability;
  StoreAvailabilityConnection: StoreAvailabilityConnection;
  StoreAvailabilityEdge: StoreAvailabilityEdge;
  StringConnection: StringConnection;
  StringEdge: StringEdge;
  TokenizedPaymentInput: TokenizedPaymentInput;
  TokenizedPaymentInputV2: TokenizedPaymentInputV2;
  TokenizedPaymentInputV3: TokenizedPaymentInputV3;
  Transaction: Transaction;
  URL: Scalars['URL'];
  UnitPriceMeasurement: UnitPriceMeasurement;
  UserError: UserError;
  Video: Video;
  VideoSource: VideoSource;
};

export type AccessRestrictedDirectiveArgs = {
  reason?: Maybe<Scalars['String']>;
};

export type AccessRestrictedDirectiveResolver<Result, Parent, ContextType = any, Args = AccessRestrictedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InContextDirectiveArgs = {
  country?: Maybe<CountryCode>;
  preferredLocationId?: Maybe<Scalars['ID']>;
};

export type InContextDirectiveResolver<Result, Parent, ContextType = any, Args = InContextDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ApiVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApiVersion'] = ResolversParentTypes['ApiVersion']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supported?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedGiftCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppliedGiftCard'] = ResolversParentTypes['AppliedGiftCard']> = {
  amountUsed?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  amountUsedV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  balanceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastCharacters?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  presentmentAmountUsed?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  author?: Resolver<ResolversTypes['ArticleAuthor'], ParentType, ContextType>;
  authorV2?: Resolver<Maybe<ResolversTypes['ArticleAuthor']>, ParentType, ContextType>;
  blog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['CommentConnection'], ParentType, ContextType, RequireFields<ArticleCommentsArgs, 'reverse'>>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ArticleContentArgs, never>>;
  contentHtml?: Resolver<ResolversTypes['HTML'], ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ArticleExcerptArgs, never>>;
  excerptHtml?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ArticleImageArgs, 'scale'>>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<ArticleMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<ArticleMetafieldsArgs, 'reverse'>>;
  publishedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['SEO']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleAuthor'] = ResolversParentTypes['ArticleAuthor']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleConnection'] = ResolversParentTypes['ArticleConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ArticleEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleEdge'] = ResolversParentTypes['ArticleEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutomaticDiscountApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutomaticDiscountApplication'] = ResolversParentTypes['AutomaticDiscountApplication']> = {
  allocationMethod?: Resolver<ResolversTypes['DiscountApplicationAllocationMethod'], ParentType, ContextType>;
  targetSelection?: Resolver<ResolversTypes['DiscountApplicationTargetSelection'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['DiscountApplicationTargetType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['PricingValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableShippingRatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableShippingRates'] = ResolversParentTypes['AvailableShippingRates']> = {
  ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shippingRates?: Resolver<Maybe<Array<ResolversTypes['ShippingRate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  articleByHandle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<BlogArticleByHandleArgs, 'handle'>>;
  articles?: Resolver<ResolversTypes['ArticleConnection'], ParentType, ContextType, RequireFields<BlogArticlesArgs, 'reverse' | 'sortKey'>>;
  authors?: Resolver<Array<ResolversTypes['ArticleAuthor']>, ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<BlogMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<BlogMetafieldsArgs, 'reverse'>>;
  seo?: Resolver<Maybe<ResolversTypes['SEO']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogConnection'] = ResolversParentTypes['BlogConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BlogEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogEdge'] = ResolversParentTypes['BlogEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Checkout'] = ResolversParentTypes['Checkout']> = {
  appliedGiftCards?: Resolver<Array<ResolversTypes['AppliedGiftCard']>, ParentType, ContextType>;
  availableShippingRates?: Resolver<Maybe<ResolversTypes['AvailableShippingRates']>, ParentType, ContextType>;
  buyerIdentity?: Resolver<ResolversTypes['CheckoutBuyerIdentity'], ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customAttributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  discountApplications?: Resolver<ResolversTypes['DiscountApplicationConnection'], ParentType, ContextType, RequireFields<CheckoutDiscountApplicationsArgs, 'reverse'>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lineItems?: Resolver<ResolversTypes['CheckoutLineItemConnection'], ParentType, ContextType, RequireFields<CheckoutLineItemsArgs, 'reverse'>>;
  lineItemsSubtotalPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  orderStatusUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  paymentDue?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  paymentDueV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requiresShipping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['MailingAddress']>, ParentType, ContextType>;
  shippingDiscountAllocations?: Resolver<Array<ResolversTypes['DiscountAllocation']>, ParentType, ContextType>;
  shippingLine?: Resolver<Maybe<ResolversTypes['ShippingRate']>, ParentType, ContextType>;
  subtotalPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  subtotalPriceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  taxExempt?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  taxesIncluded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  totalDuties?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalPriceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  totalTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalTaxV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  webUrl?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutAttributesUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutAttributesUpdatePayload'] = ResolversParentTypes['CheckoutAttributesUpdatePayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutAttributesUpdateV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutAttributesUpdateV2Payload'] = ResolversParentTypes['CheckoutAttributesUpdateV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutBuyerIdentityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutBuyerIdentity'] = ResolversParentTypes['CheckoutBuyerIdentity']> = {
  countryCode?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCompleteFreePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCompleteFreePayload'] = ResolversParentTypes['CheckoutCompleteFreePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCompleteWithCreditCardPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCompleteWithCreditCardPayload'] = ResolversParentTypes['CheckoutCompleteWithCreditCardPayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCompleteWithCreditCardV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCompleteWithCreditCardV2Payload'] = ResolversParentTypes['CheckoutCompleteWithCreditCardV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCompleteWithTokenizedPaymentPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCompleteWithTokenizedPaymentPayload'] = ResolversParentTypes['CheckoutCompleteWithTokenizedPaymentPayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCompleteWithTokenizedPaymentV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCompleteWithTokenizedPaymentV2Payload'] = ResolversParentTypes['CheckoutCompleteWithTokenizedPaymentV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCompleteWithTokenizedPaymentV3PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCompleteWithTokenizedPaymentV3Payload'] = ResolversParentTypes['CheckoutCompleteWithTokenizedPaymentV3Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCreatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCreatePayload'] = ResolversParentTypes['CheckoutCreatePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  queueToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCustomerAssociatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCustomerAssociatePayload'] = ResolversParentTypes['CheckoutCustomerAssociatePayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCustomerAssociateV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCustomerAssociateV2Payload'] = ResolversParentTypes['CheckoutCustomerAssociateV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCustomerDisassociatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCustomerDisassociatePayload'] = ResolversParentTypes['CheckoutCustomerDisassociatePayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutCustomerDisassociateV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutCustomerDisassociateV2Payload'] = ResolversParentTypes['CheckoutCustomerDisassociateV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutDiscountCodeApplyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutDiscountCodeApplyPayload'] = ResolversParentTypes['CheckoutDiscountCodeApplyPayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutDiscountCodeApplyV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutDiscountCodeApplyV2Payload'] = ResolversParentTypes['CheckoutDiscountCodeApplyV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutDiscountCodeRemovePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutDiscountCodeRemovePayload'] = ResolversParentTypes['CheckoutDiscountCodeRemovePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutEmailUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutEmailUpdatePayload'] = ResolversParentTypes['CheckoutEmailUpdatePayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutEmailUpdateV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutEmailUpdateV2Payload'] = ResolversParentTypes['CheckoutEmailUpdateV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutGiftCardApplyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutGiftCardApplyPayload'] = ResolversParentTypes['CheckoutGiftCardApplyPayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutGiftCardRemovePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutGiftCardRemovePayload'] = ResolversParentTypes['CheckoutGiftCardRemovePayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutGiftCardRemoveV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutGiftCardRemoveV2Payload'] = ResolversParentTypes['CheckoutGiftCardRemoveV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutGiftCardsAppendPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutGiftCardsAppendPayload'] = ResolversParentTypes['CheckoutGiftCardsAppendPayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItem'] = ResolversParentTypes['CheckoutLineItem']> = {
  customAttributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  discountAllocations?: Resolver<Array<ResolversTypes['DiscountAllocation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItemConnection'] = ResolversParentTypes['CheckoutLineItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CheckoutLineItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItemEdge'] = ResolversParentTypes['CheckoutLineItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CheckoutLineItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemsAddPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItemsAddPayload'] = ResolversParentTypes['CheckoutLineItemsAddPayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemsRemovePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItemsRemovePayload'] = ResolversParentTypes['CheckoutLineItemsRemovePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemsReplacePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItemsReplacePayload'] = ResolversParentTypes['CheckoutLineItemsReplacePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutLineItemsUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutLineItemsUpdatePayload'] = ResolversParentTypes['CheckoutLineItemsUpdatePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutShippingAddressUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutShippingAddressUpdatePayload'] = ResolversParentTypes['CheckoutShippingAddressUpdatePayload']> = {
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutShippingAddressUpdateV2PayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutShippingAddressUpdateV2Payload'] = ResolversParentTypes['CheckoutShippingAddressUpdateV2Payload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutShippingLineUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutShippingLineUpdatePayload'] = ResolversParentTypes['CheckoutShippingLineUpdatePayload']> = {
  checkout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  checkoutUserErrors?: Resolver<Array<ResolversTypes['CheckoutUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckoutUserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckoutUserError'] = ResolversParentTypes['CheckoutUserError']> = {
  code?: Resolver<Maybe<ResolversTypes['CheckoutErrorCode']>, ParentType, ContextType>;
  field?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<CollectionDescriptionArgs, never>>;
  descriptionHtml?: Resolver<ResolversTypes['HTML'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<CollectionImageArgs, 'scale'>>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<CollectionMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<CollectionMetafieldsArgs, 'reverse'>>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<CollectionProductsArgs, 'reverse' | 'sortKey'>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['CommentAuthor'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<CommentContentArgs, never>>;
  contentHtml?: Resolver<ResolversTypes['HTML'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentAuthor'] = ResolversParentTypes['CommentAuthor']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentConnection'] = ResolversParentTypes['CommentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CommentEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentEdge'] = ResolversParentTypes['CommentEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  isoCode?: Resolver<ResolversTypes['CountryCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitSystem?: Resolver<ResolversTypes['UnitSystem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditCard'] = ResolversParentTypes['CreditCard']> = {
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiryMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expiryYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstDigits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastDigits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maskedNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  isoCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  acceptsMarketing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addresses?: Resolver<ResolversTypes['MailingAddressConnection'], ParentType, ContextType, RequireFields<CustomerAddressesArgs, 'reverse'>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  defaultAddress?: Resolver<Maybe<ResolversTypes['MailingAddress']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastIncompleteCheckout?: Resolver<Maybe<ResolversTypes['Checkout']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<CustomerMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<CustomerMetafieldsArgs, 'reverse'>>;
  orders?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<CustomerOrdersArgs, 'reverse' | 'sortKey'>>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAccessToken'] = ResolversParentTypes['CustomerAccessToken']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAccessTokenCreatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAccessTokenCreatePayload'] = ResolversParentTypes['CustomerAccessTokenCreatePayload']> = {
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAccessTokenCreateWithMultipassPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAccessTokenCreateWithMultipassPayload'] = ResolversParentTypes['CustomerAccessTokenCreateWithMultipassPayload']> = {
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAccessTokenDeletePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAccessTokenDeletePayload'] = ResolversParentTypes['CustomerAccessTokenDeletePayload']> = {
  deletedAccessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedCustomerAccessTokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAccessTokenRenewPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAccessTokenRenewPayload'] = ResolversParentTypes['CustomerAccessTokenRenewPayload']> = {
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerActivateByUrlPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerActivateByUrlPayload'] = ResolversParentTypes['CustomerActivateByUrlPayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerActivatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerActivatePayload'] = ResolversParentTypes['CustomerActivatePayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressCreatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressCreatePayload'] = ResolversParentTypes['CustomerAddressCreatePayload']> = {
  customerAddress?: Resolver<Maybe<ResolversTypes['MailingAddress']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressDeletePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressDeletePayload'] = ResolversParentTypes['CustomerAddressDeletePayload']> = {
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  deletedCustomerAddressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerAddressUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerAddressUpdatePayload'] = ResolversParentTypes['CustomerAddressUpdatePayload']> = {
  customerAddress?: Resolver<Maybe<ResolversTypes['MailingAddress']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerCreatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerCreatePayload'] = ResolversParentTypes['CustomerCreatePayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDefaultAddressUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDefaultAddressUpdatePayload'] = ResolversParentTypes['CustomerDefaultAddressUpdatePayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerRecoverPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerRecoverPayload'] = ResolversParentTypes['CustomerRecoverPayload']> = {
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResetByUrlPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerResetByUrlPayload'] = ResolversParentTypes['CustomerResetByUrlPayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerResetPayload'] = ResolversParentTypes['CustomerResetPayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerUpdatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerUpdatePayload'] = ResolversParentTypes['CustomerUpdatePayload']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerAccessToken?: Resolver<Maybe<ResolversTypes['CustomerAccessToken']>, ParentType, ContextType>;
  customerUserErrors?: Resolver<Array<ResolversTypes['CustomerUserError']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerUserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerUserError'] = ResolversParentTypes['CustomerUserError']> = {
  code?: Resolver<Maybe<ResolversTypes['CustomerErrorCode']>, ParentType, ContextType>;
  field?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DiscountAllocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountAllocation'] = ResolversParentTypes['DiscountAllocation']> = {
  allocatedAmount?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  discountApplication?: Resolver<ResolversTypes['DiscountApplication'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountApplication'] = ResolversParentTypes['DiscountApplication']> = {
  __resolveType: TypeResolveFn<'AutomaticDiscountApplication' | 'DiscountCodeApplication' | 'ManualDiscountApplication' | 'ScriptDiscountApplication', ParentType, ContextType>;
  allocationMethod?: Resolver<ResolversTypes['DiscountApplicationAllocationMethod'], ParentType, ContextType>;
  targetSelection?: Resolver<ResolversTypes['DiscountApplicationTargetSelection'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['DiscountApplicationTargetType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['PricingValue'], ParentType, ContextType>;
};

export type DiscountApplicationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountApplicationConnection'] = ResolversParentTypes['DiscountApplicationConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DiscountApplicationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountApplicationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountApplicationEdge'] = ResolversParentTypes['DiscountApplicationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DiscountApplication'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountCodeApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountCodeApplication'] = ResolversParentTypes['DiscountCodeApplication']> = {
  allocationMethod?: Resolver<ResolversTypes['DiscountApplicationAllocationMethod'], ParentType, ContextType>;
  applicable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetSelection?: Resolver<ResolversTypes['DiscountApplicationTargetSelection'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['DiscountApplicationTargetType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['PricingValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DisplayableErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['DisplayableError'] = ResolversParentTypes['DisplayableError']> = {
  __resolveType: TypeResolveFn<'CheckoutUserError' | 'CustomerUserError' | 'UserError', ParentType, ContextType>;
  field?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type DomainResolvers<ContextType = any, ParentType extends ResolversParentTypes['Domain'] = ResolversParentTypes['Domain']> = {
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sslEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalVideo'] = ResolversParentTypes['ExternalVideo']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  embeddedUrl?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['MediaHost'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mediaContentType?: Resolver<ResolversTypes['MediaContentType'], ParentType, ContextType>;
  previewImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fulfillment'] = ResolversParentTypes['Fulfillment']> = {
  fulfillmentLineItems?: Resolver<ResolversTypes['FulfillmentLineItemConnection'], ParentType, ContextType, RequireFields<FulfillmentFulfillmentLineItemsArgs, 'reverse'>>;
  trackingCompany?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trackingInfo?: Resolver<Array<ResolversTypes['FulfillmentTrackingInfo']>, ParentType, ContextType, RequireFields<FulfillmentTrackingInfoArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentLineItem'] = ResolversParentTypes['FulfillmentLineItem']> = {
  lineItem?: Resolver<ResolversTypes['OrderLineItem'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentLineItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentLineItemConnection'] = ResolversParentTypes['FulfillmentLineItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FulfillmentLineItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentLineItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentLineItemEdge'] = ResolversParentTypes['FulfillmentLineItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['FulfillmentLineItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentTrackingInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentTrackingInfo'] = ResolversParentTypes['FulfillmentTrackingInfo']> = {
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HtmlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HTML'], any> {
  name: 'HTML';
}

export type HasMetafieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasMetafields'] = ResolversParentTypes['HasMetafields']> = {
  __resolveType: TypeResolveFn<'Article' | 'Blog' | 'Collection' | 'Customer' | 'Order' | 'Page' | 'Product' | 'ProductVariant' | 'Shop', ParentType, ContextType>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<HasMetafieldsMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<HasMetafieldsMetafieldsArgs, 'reverse'>>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  originalSrc?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  transformedSrc?: Resolver<ResolversTypes['URL'], ParentType, ContextType, RequireFields<ImageTransformedSrcArgs, 'scale'>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageConnection'] = ResolversParentTypes['ImageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ImageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageEdge'] = ResolversParentTypes['ImageEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Localization'] = ResolversParentTypes['Localization']> = {
  availableCountries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  address?: Resolver<ResolversTypes['LocationAddress'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationAddress'] = ResolversParentTypes['LocationAddress']> = {
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provinceCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationConnection'] = ResolversParentTypes['LocationConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LocationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationEdge'] = ResolversParentTypes['LocationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingAddress'] = ResolversParentTypes['MailingAddress']> = {
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCodeV2?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MailingAddressFormattedArgs, 'withName' | 'withCompany'>>;
  formattedArea?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provinceCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingAddressConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingAddressConnection'] = ResolversParentTypes['MailingAddressConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MailingAddressEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailingAddressEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailingAddressEdge'] = ResolversParentTypes['MailingAddressEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MailingAddress'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManualDiscountApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManualDiscountApplication'] = ResolversParentTypes['ManualDiscountApplication']> = {
  allocationMethod?: Resolver<ResolversTypes['DiscountApplicationAllocationMethod'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetSelection?: Resolver<ResolversTypes['DiscountApplicationTargetSelection'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['DiscountApplicationTargetType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['PricingValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  __resolveType: TypeResolveFn<'ExternalVideo' | 'MediaImage' | 'Model3d' | 'Video', ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediaContentType?: Resolver<ResolversTypes['MediaContentType'], ParentType, ContextType>;
  previewImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
};

export type MediaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MediaEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaImage'] = ResolversParentTypes['MediaImage']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  mediaContentType?: Resolver<ResolversTypes['MediaContentType'], ParentType, ContextType>;
  previewImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetafieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metafield'] = ResolversParentTypes['Metafield']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentResource?: Resolver<ResolversTypes['MetafieldParentResource'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueType?: Resolver<ResolversTypes['MetafieldValueType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetafieldConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetafieldConnection'] = ResolversParentTypes['MetafieldConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MetafieldEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetafieldEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetafieldEdge'] = ResolversParentTypes['MetafieldEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Metafield'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetafieldParentResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetafieldParentResource'] = ResolversParentTypes['MetafieldParentResource']> = {
  __resolveType: TypeResolveFn<'Article' | 'Blog' | 'Collection' | 'Customer' | 'Order' | 'Page' | 'Product' | 'ProductVariant' | 'Shop', ParentType, ContextType>;
};

export type Model3dResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model3d'] = ResolversParentTypes['Model3d']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mediaContentType?: Resolver<ResolversTypes['MediaContentType'], ParentType, ContextType>;
  previewImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['Model3dSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Model3dSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model3dSource'] = ResolversParentTypes['Model3dSource']> = {
  filesize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  format?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MoneyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Money'], any> {
  name: 'Money';
}

export type MoneyV2Resolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyV2'] = ResolversParentTypes['MoneyV2']> = {
  amount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoneyV2ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyV2Connection'] = ResolversParentTypes['MoneyV2Connection']> = {
  edges?: Resolver<Array<ResolversTypes['MoneyV2Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoneyV2EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoneyV2Edge'] = ResolversParentTypes['MoneyV2Edge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  checkoutAttributesUpdate?: Resolver<Maybe<ResolversTypes['CheckoutAttributesUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutAttributesUpdateArgs, 'checkoutId' | 'input'>>;
  checkoutAttributesUpdateV2?: Resolver<Maybe<ResolversTypes['CheckoutAttributesUpdateV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutAttributesUpdateV2Args, 'checkoutId' | 'input'>>;
  checkoutCompleteFree?: Resolver<Maybe<ResolversTypes['CheckoutCompleteFreePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutCompleteFreeArgs, 'checkoutId'>>;
  checkoutCompleteWithCreditCard?: Resolver<Maybe<ResolversTypes['CheckoutCompleteWithCreditCardPayload']>, ParentType, ContextType, RequireFields<MutationCheckoutCompleteWithCreditCardArgs, 'checkoutId' | 'payment'>>;
  checkoutCompleteWithCreditCardV2?: Resolver<Maybe<ResolversTypes['CheckoutCompleteWithCreditCardV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutCompleteWithCreditCardV2Args, 'checkoutId' | 'payment'>>;
  checkoutCompleteWithTokenizedPayment?: Resolver<Maybe<ResolversTypes['CheckoutCompleteWithTokenizedPaymentPayload']>, ParentType, ContextType, RequireFields<MutationCheckoutCompleteWithTokenizedPaymentArgs, 'checkoutId' | 'payment'>>;
  checkoutCompleteWithTokenizedPaymentV2?: Resolver<Maybe<ResolversTypes['CheckoutCompleteWithTokenizedPaymentV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutCompleteWithTokenizedPaymentV2Args, 'checkoutId' | 'payment'>>;
  checkoutCompleteWithTokenizedPaymentV3?: Resolver<Maybe<ResolversTypes['CheckoutCompleteWithTokenizedPaymentV3Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutCompleteWithTokenizedPaymentV3Args, 'checkoutId' | 'payment'>>;
  checkoutCreate?: Resolver<Maybe<ResolversTypes['CheckoutCreatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutCreateArgs, 'input'>>;
  checkoutCustomerAssociate?: Resolver<Maybe<ResolversTypes['CheckoutCustomerAssociatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutCustomerAssociateArgs, 'checkoutId' | 'customerAccessToken'>>;
  checkoutCustomerAssociateV2?: Resolver<Maybe<ResolversTypes['CheckoutCustomerAssociateV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutCustomerAssociateV2Args, 'checkoutId' | 'customerAccessToken'>>;
  checkoutCustomerDisassociate?: Resolver<Maybe<ResolversTypes['CheckoutCustomerDisassociatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutCustomerDisassociateArgs, 'checkoutId'>>;
  checkoutCustomerDisassociateV2?: Resolver<Maybe<ResolversTypes['CheckoutCustomerDisassociateV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutCustomerDisassociateV2Args, 'checkoutId'>>;
  checkoutDiscountCodeApply?: Resolver<Maybe<ResolversTypes['CheckoutDiscountCodeApplyPayload']>, ParentType, ContextType, RequireFields<MutationCheckoutDiscountCodeApplyArgs, 'discountCode' | 'checkoutId'>>;
  checkoutDiscountCodeApplyV2?: Resolver<Maybe<ResolversTypes['CheckoutDiscountCodeApplyV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutDiscountCodeApplyV2Args, 'discountCode' | 'checkoutId'>>;
  checkoutDiscountCodeRemove?: Resolver<Maybe<ResolversTypes['CheckoutDiscountCodeRemovePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutDiscountCodeRemoveArgs, 'checkoutId'>>;
  checkoutEmailUpdate?: Resolver<Maybe<ResolversTypes['CheckoutEmailUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutEmailUpdateArgs, 'checkoutId' | 'email'>>;
  checkoutEmailUpdateV2?: Resolver<Maybe<ResolversTypes['CheckoutEmailUpdateV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutEmailUpdateV2Args, 'checkoutId' | 'email'>>;
  checkoutGiftCardApply?: Resolver<Maybe<ResolversTypes['CheckoutGiftCardApplyPayload']>, ParentType, ContextType, RequireFields<MutationCheckoutGiftCardApplyArgs, 'giftCardCode' | 'checkoutId'>>;
  checkoutGiftCardRemove?: Resolver<Maybe<ResolversTypes['CheckoutGiftCardRemovePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutGiftCardRemoveArgs, 'appliedGiftCardId' | 'checkoutId'>>;
  checkoutGiftCardRemoveV2?: Resolver<Maybe<ResolversTypes['CheckoutGiftCardRemoveV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutGiftCardRemoveV2Args, 'appliedGiftCardId' | 'checkoutId'>>;
  checkoutGiftCardsAppend?: Resolver<Maybe<ResolversTypes['CheckoutGiftCardsAppendPayload']>, ParentType, ContextType, RequireFields<MutationCheckoutGiftCardsAppendArgs, 'giftCardCodes' | 'checkoutId'>>;
  checkoutLineItemsAdd?: Resolver<Maybe<ResolversTypes['CheckoutLineItemsAddPayload']>, ParentType, ContextType, RequireFields<MutationCheckoutLineItemsAddArgs, 'lineItems' | 'checkoutId'>>;
  checkoutLineItemsRemove?: Resolver<Maybe<ResolversTypes['CheckoutLineItemsRemovePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutLineItemsRemoveArgs, 'checkoutId' | 'lineItemIds'>>;
  checkoutLineItemsReplace?: Resolver<Maybe<ResolversTypes['CheckoutLineItemsReplacePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutLineItemsReplaceArgs, 'lineItems' | 'checkoutId'>>;
  checkoutLineItemsUpdate?: Resolver<Maybe<ResolversTypes['CheckoutLineItemsUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutLineItemsUpdateArgs, 'checkoutId' | 'lineItems'>>;
  checkoutShippingAddressUpdate?: Resolver<Maybe<ResolversTypes['CheckoutShippingAddressUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutShippingAddressUpdateArgs, 'shippingAddress' | 'checkoutId'>>;
  checkoutShippingAddressUpdateV2?: Resolver<Maybe<ResolversTypes['CheckoutShippingAddressUpdateV2Payload']>, ParentType, ContextType, RequireFields<MutationCheckoutShippingAddressUpdateV2Args, 'shippingAddress' | 'checkoutId'>>;
  checkoutShippingLineUpdate?: Resolver<Maybe<ResolversTypes['CheckoutShippingLineUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCheckoutShippingLineUpdateArgs, 'checkoutId' | 'shippingRateHandle'>>;
  customerAccessTokenCreate?: Resolver<Maybe<ResolversTypes['CustomerAccessTokenCreatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerAccessTokenCreateArgs, 'input'>>;
  customerAccessTokenCreateWithMultipass?: Resolver<Maybe<ResolversTypes['CustomerAccessTokenCreateWithMultipassPayload']>, ParentType, ContextType, RequireFields<MutationCustomerAccessTokenCreateWithMultipassArgs, 'multipassToken'>>;
  customerAccessTokenDelete?: Resolver<Maybe<ResolversTypes['CustomerAccessTokenDeletePayload']>, ParentType, ContextType, RequireFields<MutationCustomerAccessTokenDeleteArgs, 'customerAccessToken'>>;
  customerAccessTokenRenew?: Resolver<Maybe<ResolversTypes['CustomerAccessTokenRenewPayload']>, ParentType, ContextType, RequireFields<MutationCustomerAccessTokenRenewArgs, 'customerAccessToken'>>;
  customerActivate?: Resolver<Maybe<ResolversTypes['CustomerActivatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerActivateArgs, 'id' | 'input'>>;
  customerActivateByUrl?: Resolver<Maybe<ResolversTypes['CustomerActivateByUrlPayload']>, ParentType, ContextType, RequireFields<MutationCustomerActivateByUrlArgs, 'activationUrl' | 'password'>>;
  customerAddressCreate?: Resolver<Maybe<ResolversTypes['CustomerAddressCreatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerAddressCreateArgs, 'customerAccessToken' | 'address'>>;
  customerAddressDelete?: Resolver<Maybe<ResolversTypes['CustomerAddressDeletePayload']>, ParentType, ContextType, RequireFields<MutationCustomerAddressDeleteArgs, 'id' | 'customerAccessToken'>>;
  customerAddressUpdate?: Resolver<Maybe<ResolversTypes['CustomerAddressUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerAddressUpdateArgs, 'customerAccessToken' | 'id' | 'address'>>;
  customerCreate?: Resolver<Maybe<ResolversTypes['CustomerCreatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerCreateArgs, 'input'>>;
  customerDefaultAddressUpdate?: Resolver<Maybe<ResolversTypes['CustomerDefaultAddressUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerDefaultAddressUpdateArgs, 'customerAccessToken' | 'addressId'>>;
  customerRecover?: Resolver<Maybe<ResolversTypes['CustomerRecoverPayload']>, ParentType, ContextType, RequireFields<MutationCustomerRecoverArgs, 'email'>>;
  customerReset?: Resolver<Maybe<ResolversTypes['CustomerResetPayload']>, ParentType, ContextType, RequireFields<MutationCustomerResetArgs, 'id' | 'input'>>;
  customerResetByUrl?: Resolver<Maybe<ResolversTypes['CustomerResetByUrlPayload']>, ParentType, ContextType, RequireFields<MutationCustomerResetByUrlArgs, 'resetUrl' | 'password'>>;
  customerUpdate?: Resolver<Maybe<ResolversTypes['CustomerUpdatePayload']>, ParentType, ContextType, RequireFields<MutationCustomerUpdateArgs, 'customerAccessToken' | 'customer'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'AppliedGiftCard' | 'Article' | 'Blog' | 'Checkout' | 'CheckoutLineItem' | 'Collection' | 'Comment' | 'ExternalVideo' | 'Location' | 'MailingAddress' | 'MediaImage' | 'Metafield' | 'Model3d' | 'Order' | 'Page' | 'Payment' | 'Product' | 'ProductOption' | 'ProductVariant' | 'ShopPolicy' | 'Video', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  cancelReason?: Resolver<Maybe<ResolversTypes['OrderCancelReason']>, ParentType, ContextType>;
  canceledAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  currentSubtotalPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  currentTotalDuties?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  currentTotalPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  currentTotalTax?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  customerLocale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  discountApplications?: Resolver<ResolversTypes['DiscountApplicationConnection'], ParentType, ContextType, RequireFields<OrderDiscountApplicationsArgs, 'reverse'>>;
  edited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  financialStatus?: Resolver<Maybe<ResolversTypes['OrderFinancialStatus']>, ParentType, ContextType>;
  fulfillmentStatus?: Resolver<ResolversTypes['OrderFulfillmentStatus'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lineItems?: Resolver<ResolversTypes['OrderLineItemConnection'], ParentType, ContextType, RequireFields<OrderLineItemsArgs, 'reverse'>>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<OrderMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<OrderMetafieldsArgs, 'reverse'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalTotalDuties?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  originalTotalPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['MailingAddress']>, ParentType, ContextType>;
  shippingDiscountAllocations?: Resolver<Array<ResolversTypes['DiscountAllocation']>, ParentType, ContextType>;
  statusUrl?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  subtotalPrice?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  subtotalPriceV2?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  successfulFulfillments?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType, RequireFields<OrderSuccessfulFulfillmentsArgs, never>>;
  totalPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalPriceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  totalRefunded?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalRefundedV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  totalShippingPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalShippingPriceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  totalTax?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  totalTaxV2?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderEdge'] = ResolversParentTypes['OrderEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLineItem'] = ResolversParentTypes['OrderLineItem']> = {
  currentQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customAttributes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  discountAllocations?: Resolver<Array<ResolversTypes['DiscountAllocation']>, ParentType, ContextType>;
  discountedTotalPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  originalTotalPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLineItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLineItemConnection'] = ResolversParentTypes['OrderLineItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderLineItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLineItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLineItemEdge'] = ResolversParentTypes['OrderLineItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrderLineItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  body?: Resolver<ResolversTypes['HTML'], ParentType, ContextType>;
  bodySummary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<PageMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<PageMetafieldsArgs, 'reverse'>>;
  seo?: Resolver<Maybe<ResolversTypes['SEO']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageConnection'] = ResolversParentTypes['PageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageEdge'] = ResolversParentTypes['PageEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  amountV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['MailingAddress']>, ParentType, ContextType>;
  checkout?: Resolver<ResolversTypes['Checkout'], ParentType, ContextType>;
  creditCard?: Resolver<Maybe<ResolversTypes['CreditCard']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  idempotencyKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextActionUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentSettings'] = ResolversParentTypes['PaymentSettings']> = {
  acceptedCardBrands?: Resolver<Array<ResolversTypes['CardBrand']>, ParentType, ContextType>;
  cardVaultUrl?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['CountryCode'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  enabledPresentmentCurrencies?: Resolver<Array<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  shopifyPaymentsAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportedDigitalWallets?: Resolver<Array<ResolversTypes['DigitalWallet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingPercentageValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingPercentageValue'] = ResolversParentTypes['PricingPercentageValue']> = {
  percentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingValue'] = ResolversParentTypes['PricingValue']> = {
  __resolveType: TypeResolveFn<'MoneyV2' | 'PricingPercentageValue', ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  availableForSale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<ProductCollectionsArgs, 'reverse'>>;
  compareAtPriceRange?: Resolver<ResolversTypes['ProductPriceRange'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ProductDescriptionArgs, never>>;
  descriptionHtml?: Resolver<ResolversTypes['HTML'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['ImageConnection'], ParentType, ContextType, RequireFields<ProductImagesArgs, 'reverse' | 'sortKey' | 'scale'>>;
  media?: Resolver<ResolversTypes['MediaConnection'], ParentType, ContextType, RequireFields<ProductMediaArgs, 'reverse' | 'sortKey'>>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<ProductMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<ProductMetafieldsArgs, 'reverse'>>;
  onlineStoreUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType, RequireFields<ProductOptionsArgs, never>>;
  presentmentPriceRanges?: Resolver<ResolversTypes['ProductPriceRangeConnection'], ParentType, ContextType, RequireFields<ProductPresentmentPriceRangesArgs, 'reverse'>>;
  priceRange?: Resolver<ResolversTypes['ProductPriceRange'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  requiresSellingPlan?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sellingPlanGroups?: Resolver<ResolversTypes['SellingPlanGroupConnection'], ParentType, ContextType, RequireFields<ProductSellingPlanGroupsArgs, 'reverse'>>;
  seo?: Resolver<ResolversTypes['SEO'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalInventory?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  variantBySelectedOptions?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<ProductVariantBySelectedOptionsArgs, 'selectedOptions'>>;
  variants?: Resolver<ResolversTypes['ProductVariantConnection'], ParentType, ContextType, RequireFields<ProductVariantsArgs, 'reverse' | 'sortKey'>>;
  vendor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPriceRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceRange'] = ResolversParentTypes['ProductPriceRange']> = {
  maxVariantPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  minVariantPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPriceRangeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceRangeConnection'] = ResolversParentTypes['ProductPriceRangeConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductPriceRangeEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPriceRangeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceRangeEdge'] = ResolversParentTypes['ProductPriceRangeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductPriceRange'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = {
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  availableForSale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  compareAtPrice?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  compareAtPriceV2?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  currentlyNotInStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ProductVariantImageArgs, 'scale'>>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<ProductVariantMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<ProductVariantMetafieldsArgs, 'reverse'>>;
  presentmentPrices?: Resolver<ResolversTypes['ProductVariantPricePairConnection'], ParentType, ContextType, RequireFields<ProductVariantPresentmentPricesArgs, 'reverse'>>;
  presentmentUnitPrices?: Resolver<ResolversTypes['MoneyV2Connection'], ParentType, ContextType, RequireFields<ProductVariantPresentmentUnitPricesArgs, 'reverse'>>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  quantityAvailable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requiresShipping?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  selectedOptions?: Resolver<Array<ResolversTypes['SelectedOption']>, ParentType, ContextType>;
  sellingPlanAllocations?: Resolver<ResolversTypes['SellingPlanAllocationConnection'], ParentType, ContextType, RequireFields<ProductVariantSellingPlanAllocationsArgs, 'reverse'>>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeAvailability?: Resolver<ResolversTypes['StoreAvailabilityConnection'], ParentType, ContextType, RequireFields<ProductVariantStoreAvailabilityArgs, 'reverse'>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  unitPriceMeasurement?: Resolver<Maybe<ResolversTypes['UnitPriceMeasurement']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weightUnit?: Resolver<ResolversTypes['WeightUnit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantConnection'] = ResolversParentTypes['ProductVariantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductVariantEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantEdge'] = ResolversParentTypes['ProductVariantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantPricePairResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantPricePair'] = ResolversParentTypes['ProductVariantPricePair']> = {
  compareAtPrice?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantPricePairConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantPricePairConnection'] = ResolversParentTypes['ProductVariantPricePairConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProductVariantPricePairEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantPricePairEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantPricePairEdge'] = ResolversParentTypes['ProductVariantPricePairEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductVariantPricePair'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryRootResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryRoot'] = ResolversParentTypes['QueryRoot']> = {
  articles?: Resolver<ResolversTypes['ArticleConnection'], ParentType, ContextType, RequireFields<QueryRootArticlesArgs, 'reverse' | 'sortKey'>>;
  blogByHandle?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryRootBlogByHandleArgs, 'handle'>>;
  blogs?: Resolver<ResolversTypes['BlogConnection'], ParentType, ContextType, RequireFields<QueryRootBlogsArgs, 'reverse' | 'sortKey'>>;
  collectionByHandle?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryRootCollectionByHandleArgs, 'handle'>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<QueryRootCollectionsArgs, 'reverse' | 'sortKey'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryRootCustomerArgs, 'customerAccessToken'>>;
  localization?: Resolver<ResolversTypes['Localization'], ParentType, ContextType>;
  locations?: Resolver<ResolversTypes['LocationConnection'], ParentType, ContextType, RequireFields<QueryRootLocationsArgs, 'reverse' | 'sortKey'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryRootNodeArgs, 'id'>>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryRootNodesArgs, 'ids'>>;
  pageByHandle?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryRootPageByHandleArgs, 'handle'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<QueryRootPagesArgs, 'reverse' | 'sortKey'>>;
  productByHandle?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryRootProductByHandleArgs, 'handle'>>;
  productRecommendations?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryRootProductRecommendationsArgs, 'productId'>>;
  productTags?: Resolver<ResolversTypes['StringConnection'], ParentType, ContextType, RequireFields<QueryRootProductTagsArgs, 'first'>>;
  productTypes?: Resolver<ResolversTypes['StringConnection'], ParentType, ContextType, RequireFields<QueryRootProductTypesArgs, 'first'>>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<QueryRootProductsArgs, 'reverse' | 'sortKey'>>;
  publicApiVersions?: Resolver<Array<ResolversTypes['ApiVersion']>, ParentType, ContextType>;
  shop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType>;
};

export type SeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SEO'] = ResolversParentTypes['SEO']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScriptDiscountApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScriptDiscountApplication'] = ResolversParentTypes['ScriptDiscountApplication']> = {
  allocationMethod?: Resolver<ResolversTypes['DiscountApplicationAllocationMethod'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetSelection?: Resolver<ResolversTypes['DiscountApplicationTargetSelection'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['DiscountApplicationTargetType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['PricingValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedOption'] = ResolversParentTypes['SelectedOption']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlan'] = ResolversParentTypes['SellingPlan']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SellingPlanOption']>, ParentType, ContextType>;
  priceAdjustments?: Resolver<Array<ResolversTypes['SellingPlanPriceAdjustment']>, ParentType, ContextType>;
  recurringDeliveries?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanAllocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanAllocation'] = ResolversParentTypes['SellingPlanAllocation']> = {
  priceAdjustments?: Resolver<Array<ResolversTypes['SellingPlanAllocationPriceAdjustment']>, ParentType, ContextType>;
  sellingPlan?: Resolver<ResolversTypes['SellingPlan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanAllocationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanAllocationConnection'] = ResolversParentTypes['SellingPlanAllocationConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SellingPlanAllocationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanAllocationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanAllocationEdge'] = ResolversParentTypes['SellingPlanAllocationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SellingPlanAllocation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanAllocationPriceAdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanAllocationPriceAdjustment'] = ResolversParentTypes['SellingPlanAllocationPriceAdjustment']> = {
  compareAtPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  perDeliveryPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['MoneyV2']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanConnection'] = ResolversParentTypes['SellingPlanConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SellingPlanEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanEdge'] = ResolversParentTypes['SellingPlanEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SellingPlan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanFixedAmountPriceAdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanFixedAmountPriceAdjustment'] = ResolversParentTypes['SellingPlanFixedAmountPriceAdjustment']> = {
  adjustmentAmount?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanFixedPriceAdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanFixedPriceAdjustment'] = ResolversParentTypes['SellingPlanFixedPriceAdjustment']> = {
  price?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanGroup'] = ResolversParentTypes['SellingPlanGroup']> = {
  appName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SellingPlanGroupOption']>, ParentType, ContextType>;
  sellingPlans?: Resolver<ResolversTypes['SellingPlanConnection'], ParentType, ContextType, RequireFields<SellingPlanGroupSellingPlansArgs, 'reverse'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanGroupConnection'] = ResolversParentTypes['SellingPlanGroupConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SellingPlanGroupEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanGroupEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanGroupEdge'] = ResolversParentTypes['SellingPlanGroupEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SellingPlanGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanGroupOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanGroupOption'] = ResolversParentTypes['SellingPlanGroupOption']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanOption'] = ResolversParentTypes['SellingPlanOption']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanPercentagePriceAdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanPercentagePriceAdjustment'] = ResolversParentTypes['SellingPlanPercentagePriceAdjustment']> = {
  adjustmentPercentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanPriceAdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanPriceAdjustment'] = ResolversParentTypes['SellingPlanPriceAdjustment']> = {
  adjustmentValue?: Resolver<ResolversTypes['SellingPlanPriceAdjustmentValue'], ParentType, ContextType>;
  orderCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingPlanPriceAdjustmentValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingPlanPriceAdjustmentValue'] = ResolversParentTypes['SellingPlanPriceAdjustmentValue']> = {
  __resolveType: TypeResolveFn<'SellingPlanFixedAmountPriceAdjustment' | 'SellingPlanFixedPriceAdjustment' | 'SellingPlanPercentagePriceAdjustment', ParentType, ContextType>;
};

export type ShippingRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingRate'] = ResolversParentTypes['ShippingRate']> = {
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = {
  articles?: Resolver<ResolversTypes['ArticleConnection'], ParentType, ContextType, RequireFields<ShopArticlesArgs, 'reverse' | 'sortKey'>>;
  blogs?: Resolver<ResolversTypes['BlogConnection'], ParentType, ContextType, RequireFields<ShopBlogsArgs, 'reverse' | 'sortKey'>>;
  collectionByHandle?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<ShopCollectionByHandleArgs, 'handle'>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<ShopCollectionsArgs, 'reverse' | 'sortKey'>>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metafield?: Resolver<Maybe<ResolversTypes['Metafield']>, ParentType, ContextType, RequireFields<ShopMetafieldArgs, 'namespace' | 'key'>>;
  metafields?: Resolver<ResolversTypes['MetafieldConnection'], ParentType, ContextType, RequireFields<ShopMetafieldsArgs, 'reverse'>>;
  moneyFormat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentSettings?: Resolver<ResolversTypes['PaymentSettings'], ParentType, ContextType>;
  primaryDomain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  privacyPolicy?: Resolver<Maybe<ResolversTypes['ShopPolicy']>, ParentType, ContextType>;
  productByHandle?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<ShopProductByHandleArgs, 'handle'>>;
  productTags?: Resolver<ResolversTypes['StringConnection'], ParentType, ContextType, RequireFields<ShopProductTagsArgs, 'first'>>;
  productTypes?: Resolver<ResolversTypes['StringConnection'], ParentType, ContextType, RequireFields<ShopProductTypesArgs, 'first'>>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<ShopProductsArgs, 'reverse' | 'sortKey'>>;
  refundPolicy?: Resolver<Maybe<ResolversTypes['ShopPolicy']>, ParentType, ContextType>;
  shippingPolicy?: Resolver<Maybe<ResolversTypes['ShopPolicy']>, ParentType, ContextType>;
  shipsToCountries?: Resolver<Array<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  shopifyPaymentsAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termsOfService?: Resolver<Maybe<ResolversTypes['ShopPolicy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopPolicyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopPolicy'] = ResolversParentTypes['ShopPolicy']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreAvailabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreAvailability'] = ResolversParentTypes['StoreAvailability']> = {
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  pickUpTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreAvailabilityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreAvailabilityConnection'] = ResolversParentTypes['StoreAvailabilityConnection']> = {
  edges?: Resolver<Array<ResolversTypes['StoreAvailabilityEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreAvailabilityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreAvailabilityEdge'] = ResolversParentTypes['StoreAvailabilityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['StoreAvailability'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringConnection'] = ResolversParentTypes['StringConnection']> = {
  edges?: Resolver<Array<ResolversTypes['StringEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringEdge'] = ResolversParentTypes['StringEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  amountV2?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['TransactionKind'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  statusV2?: Resolver<Maybe<ResolversTypes['TransactionStatus']>, ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UnitPriceMeasurementResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitPriceMeasurement'] = ResolversParentTypes['UnitPriceMeasurement']> = {
  measuredType?: Resolver<Maybe<ResolversTypes['UnitPriceMeasurementMeasuredType']>, ParentType, ContextType>;
  quantityUnit?: Resolver<Maybe<ResolversTypes['UnitPriceMeasurementMeasuredUnit']>, ParentType, ContextType>;
  quantityValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  referenceUnit?: Resolver<Maybe<ResolversTypes['UnitPriceMeasurementMeasuredUnit']>, ParentType, ContextType>;
  referenceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  field?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mediaContentType?: Resolver<ResolversTypes['MediaContentType'], ParentType, ContextType>;
  previewImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes['VideoSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoSource'] = ResolversParentTypes['VideoSource']> = {
  format?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ApiVersion?: ApiVersionResolvers<ContextType>;
  AppliedGiftCard?: AppliedGiftCardResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleAuthor?: ArticleAuthorResolvers<ContextType>;
  ArticleConnection?: ArticleConnectionResolvers<ContextType>;
  ArticleEdge?: ArticleEdgeResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AutomaticDiscountApplication?: AutomaticDiscountApplicationResolvers<ContextType>;
  AvailableShippingRates?: AvailableShippingRatesResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  BlogConnection?: BlogConnectionResolvers<ContextType>;
  BlogEdge?: BlogEdgeResolvers<ContextType>;
  Checkout?: CheckoutResolvers<ContextType>;
  CheckoutAttributesUpdatePayload?: CheckoutAttributesUpdatePayloadResolvers<ContextType>;
  CheckoutAttributesUpdateV2Payload?: CheckoutAttributesUpdateV2PayloadResolvers<ContextType>;
  CheckoutBuyerIdentity?: CheckoutBuyerIdentityResolvers<ContextType>;
  CheckoutCompleteFreePayload?: CheckoutCompleteFreePayloadResolvers<ContextType>;
  CheckoutCompleteWithCreditCardPayload?: CheckoutCompleteWithCreditCardPayloadResolvers<ContextType>;
  CheckoutCompleteWithCreditCardV2Payload?: CheckoutCompleteWithCreditCardV2PayloadResolvers<ContextType>;
  CheckoutCompleteWithTokenizedPaymentPayload?: CheckoutCompleteWithTokenizedPaymentPayloadResolvers<ContextType>;
  CheckoutCompleteWithTokenizedPaymentV2Payload?: CheckoutCompleteWithTokenizedPaymentV2PayloadResolvers<ContextType>;
  CheckoutCompleteWithTokenizedPaymentV3Payload?: CheckoutCompleteWithTokenizedPaymentV3PayloadResolvers<ContextType>;
  CheckoutCreatePayload?: CheckoutCreatePayloadResolvers<ContextType>;
  CheckoutCustomerAssociatePayload?: CheckoutCustomerAssociatePayloadResolvers<ContextType>;
  CheckoutCustomerAssociateV2Payload?: CheckoutCustomerAssociateV2PayloadResolvers<ContextType>;
  CheckoutCustomerDisassociatePayload?: CheckoutCustomerDisassociatePayloadResolvers<ContextType>;
  CheckoutCustomerDisassociateV2Payload?: CheckoutCustomerDisassociateV2PayloadResolvers<ContextType>;
  CheckoutDiscountCodeApplyPayload?: CheckoutDiscountCodeApplyPayloadResolvers<ContextType>;
  CheckoutDiscountCodeApplyV2Payload?: CheckoutDiscountCodeApplyV2PayloadResolvers<ContextType>;
  CheckoutDiscountCodeRemovePayload?: CheckoutDiscountCodeRemovePayloadResolvers<ContextType>;
  CheckoutEmailUpdatePayload?: CheckoutEmailUpdatePayloadResolvers<ContextType>;
  CheckoutEmailUpdateV2Payload?: CheckoutEmailUpdateV2PayloadResolvers<ContextType>;
  CheckoutGiftCardApplyPayload?: CheckoutGiftCardApplyPayloadResolvers<ContextType>;
  CheckoutGiftCardRemovePayload?: CheckoutGiftCardRemovePayloadResolvers<ContextType>;
  CheckoutGiftCardRemoveV2Payload?: CheckoutGiftCardRemoveV2PayloadResolvers<ContextType>;
  CheckoutGiftCardsAppendPayload?: CheckoutGiftCardsAppendPayloadResolvers<ContextType>;
  CheckoutLineItem?: CheckoutLineItemResolvers<ContextType>;
  CheckoutLineItemConnection?: CheckoutLineItemConnectionResolvers<ContextType>;
  CheckoutLineItemEdge?: CheckoutLineItemEdgeResolvers<ContextType>;
  CheckoutLineItemsAddPayload?: CheckoutLineItemsAddPayloadResolvers<ContextType>;
  CheckoutLineItemsRemovePayload?: CheckoutLineItemsRemovePayloadResolvers<ContextType>;
  CheckoutLineItemsReplacePayload?: CheckoutLineItemsReplacePayloadResolvers<ContextType>;
  CheckoutLineItemsUpdatePayload?: CheckoutLineItemsUpdatePayloadResolvers<ContextType>;
  CheckoutShippingAddressUpdatePayload?: CheckoutShippingAddressUpdatePayloadResolvers<ContextType>;
  CheckoutShippingAddressUpdateV2Payload?: CheckoutShippingAddressUpdateV2PayloadResolvers<ContextType>;
  CheckoutShippingLineUpdatePayload?: CheckoutShippingLineUpdatePayloadResolvers<ContextType>;
  CheckoutUserError?: CheckoutUserErrorResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentAuthor?: CommentAuthorResolvers<ContextType>;
  CommentConnection?: CommentConnectionResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CreditCard?: CreditCardResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerAccessToken?: CustomerAccessTokenResolvers<ContextType>;
  CustomerAccessTokenCreatePayload?: CustomerAccessTokenCreatePayloadResolvers<ContextType>;
  CustomerAccessTokenCreateWithMultipassPayload?: CustomerAccessTokenCreateWithMultipassPayloadResolvers<ContextType>;
  CustomerAccessTokenDeletePayload?: CustomerAccessTokenDeletePayloadResolvers<ContextType>;
  CustomerAccessTokenRenewPayload?: CustomerAccessTokenRenewPayloadResolvers<ContextType>;
  CustomerActivateByUrlPayload?: CustomerActivateByUrlPayloadResolvers<ContextType>;
  CustomerActivatePayload?: CustomerActivatePayloadResolvers<ContextType>;
  CustomerAddressCreatePayload?: CustomerAddressCreatePayloadResolvers<ContextType>;
  CustomerAddressDeletePayload?: CustomerAddressDeletePayloadResolvers<ContextType>;
  CustomerAddressUpdatePayload?: CustomerAddressUpdatePayloadResolvers<ContextType>;
  CustomerCreatePayload?: CustomerCreatePayloadResolvers<ContextType>;
  CustomerDefaultAddressUpdatePayload?: CustomerDefaultAddressUpdatePayloadResolvers<ContextType>;
  CustomerRecoverPayload?: CustomerRecoverPayloadResolvers<ContextType>;
  CustomerResetByUrlPayload?: CustomerResetByUrlPayloadResolvers<ContextType>;
  CustomerResetPayload?: CustomerResetPayloadResolvers<ContextType>;
  CustomerUpdatePayload?: CustomerUpdatePayloadResolvers<ContextType>;
  CustomerUserError?: CustomerUserErrorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  DiscountAllocation?: DiscountAllocationResolvers<ContextType>;
  DiscountApplication?: DiscountApplicationResolvers<ContextType>;
  DiscountApplicationConnection?: DiscountApplicationConnectionResolvers<ContextType>;
  DiscountApplicationEdge?: DiscountApplicationEdgeResolvers<ContextType>;
  DiscountCodeApplication?: DiscountCodeApplicationResolvers<ContextType>;
  DisplayableError?: DisplayableErrorResolvers<ContextType>;
  Domain?: DomainResolvers<ContextType>;
  ExternalVideo?: ExternalVideoResolvers<ContextType>;
  Fulfillment?: FulfillmentResolvers<ContextType>;
  FulfillmentLineItem?: FulfillmentLineItemResolvers<ContextType>;
  FulfillmentLineItemConnection?: FulfillmentLineItemConnectionResolvers<ContextType>;
  FulfillmentLineItemEdge?: FulfillmentLineItemEdgeResolvers<ContextType>;
  FulfillmentTrackingInfo?: FulfillmentTrackingInfoResolvers<ContextType>;
  HTML?: GraphQLScalarType;
  HasMetafields?: HasMetafieldsResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ImageConnection?: ImageConnectionResolvers<ContextType>;
  ImageEdge?: ImageEdgeResolvers<ContextType>;
  Localization?: LocalizationResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationAddress?: LocationAddressResolvers<ContextType>;
  LocationConnection?: LocationConnectionResolvers<ContextType>;
  LocationEdge?: LocationEdgeResolvers<ContextType>;
  MailingAddress?: MailingAddressResolvers<ContextType>;
  MailingAddressConnection?: MailingAddressConnectionResolvers<ContextType>;
  MailingAddressEdge?: MailingAddressEdgeResolvers<ContextType>;
  ManualDiscountApplication?: ManualDiscountApplicationResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaConnection?: MediaConnectionResolvers<ContextType>;
  MediaEdge?: MediaEdgeResolvers<ContextType>;
  MediaImage?: MediaImageResolvers<ContextType>;
  Metafield?: MetafieldResolvers<ContextType>;
  MetafieldConnection?: MetafieldConnectionResolvers<ContextType>;
  MetafieldEdge?: MetafieldEdgeResolvers<ContextType>;
  MetafieldParentResource?: MetafieldParentResourceResolvers<ContextType>;
  Model3d?: Model3dResolvers<ContextType>;
  Model3dSource?: Model3dSourceResolvers<ContextType>;
  Money?: GraphQLScalarType;
  MoneyV2?: MoneyV2Resolvers<ContextType>;
  MoneyV2Connection?: MoneyV2ConnectionResolvers<ContextType>;
  MoneyV2Edge?: MoneyV2EdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  OrderEdge?: OrderEdgeResolvers<ContextType>;
  OrderLineItem?: OrderLineItemResolvers<ContextType>;
  OrderLineItemConnection?: OrderLineItemConnectionResolvers<ContextType>;
  OrderLineItemEdge?: OrderLineItemEdgeResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageConnection?: PageConnectionResolvers<ContextType>;
  PageEdge?: PageEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentSettings?: PaymentSettingsResolvers<ContextType>;
  PricingPercentageValue?: PricingPercentageValueResolvers<ContextType>;
  PricingValue?: PricingValueResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductPriceRange?: ProductPriceRangeResolvers<ContextType>;
  ProductPriceRangeConnection?: ProductPriceRangeConnectionResolvers<ContextType>;
  ProductPriceRangeEdge?: ProductPriceRangeEdgeResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  ProductVariantConnection?: ProductVariantConnectionResolvers<ContextType>;
  ProductVariantEdge?: ProductVariantEdgeResolvers<ContextType>;
  ProductVariantPricePair?: ProductVariantPricePairResolvers<ContextType>;
  ProductVariantPricePairConnection?: ProductVariantPricePairConnectionResolvers<ContextType>;
  ProductVariantPricePairEdge?: ProductVariantPricePairEdgeResolvers<ContextType>;
  QueryRoot?: QueryRootResolvers<ContextType>;
  SEO?: SeoResolvers<ContextType>;
  ScriptDiscountApplication?: ScriptDiscountApplicationResolvers<ContextType>;
  SelectedOption?: SelectedOptionResolvers<ContextType>;
  SellingPlan?: SellingPlanResolvers<ContextType>;
  SellingPlanAllocation?: SellingPlanAllocationResolvers<ContextType>;
  SellingPlanAllocationConnection?: SellingPlanAllocationConnectionResolvers<ContextType>;
  SellingPlanAllocationEdge?: SellingPlanAllocationEdgeResolvers<ContextType>;
  SellingPlanAllocationPriceAdjustment?: SellingPlanAllocationPriceAdjustmentResolvers<ContextType>;
  SellingPlanConnection?: SellingPlanConnectionResolvers<ContextType>;
  SellingPlanEdge?: SellingPlanEdgeResolvers<ContextType>;
  SellingPlanFixedAmountPriceAdjustment?: SellingPlanFixedAmountPriceAdjustmentResolvers<ContextType>;
  SellingPlanFixedPriceAdjustment?: SellingPlanFixedPriceAdjustmentResolvers<ContextType>;
  SellingPlanGroup?: SellingPlanGroupResolvers<ContextType>;
  SellingPlanGroupConnection?: SellingPlanGroupConnectionResolvers<ContextType>;
  SellingPlanGroupEdge?: SellingPlanGroupEdgeResolvers<ContextType>;
  SellingPlanGroupOption?: SellingPlanGroupOptionResolvers<ContextType>;
  SellingPlanOption?: SellingPlanOptionResolvers<ContextType>;
  SellingPlanPercentagePriceAdjustment?: SellingPlanPercentagePriceAdjustmentResolvers<ContextType>;
  SellingPlanPriceAdjustment?: SellingPlanPriceAdjustmentResolvers<ContextType>;
  SellingPlanPriceAdjustmentValue?: SellingPlanPriceAdjustmentValueResolvers<ContextType>;
  ShippingRate?: ShippingRateResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  ShopPolicy?: ShopPolicyResolvers<ContextType>;
  StoreAvailability?: StoreAvailabilityResolvers<ContextType>;
  StoreAvailabilityConnection?: StoreAvailabilityConnectionResolvers<ContextType>;
  StoreAvailabilityEdge?: StoreAvailabilityEdgeResolvers<ContextType>;
  StringConnection?: StringConnectionResolvers<ContextType>;
  StringEdge?: StringEdgeResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  URL?: GraphQLScalarType;
  UnitPriceMeasurement?: UnitPriceMeasurementResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  Video?: VideoResolvers<ContextType>;
  VideoSource?: VideoSourceResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  accessRestricted?: AccessRestrictedDirectiveResolver<any, any, ContextType>;
  inContext?: InContextDirectiveResolver<any, any, ContextType>;
};
