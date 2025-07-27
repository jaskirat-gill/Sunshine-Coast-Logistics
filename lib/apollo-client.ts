import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Get WordPress URL from environment variable or use default
const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? 'https://44.237.126.68';

// Create HTTP link
const httpLink = createHttpLink({
  uri: `${WORDPRESS_URL}/graphql`,
});

// Add auth context if needed (for future use)
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    }
  }
});

// Create Apollo Client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
}); 