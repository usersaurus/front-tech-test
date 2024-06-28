import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from } from '@apollo/client';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';

const removeTypenameLink = removeTypenameFromVariables();
const link = from([removeTypenameLink, new HttpLink({ uri: import.meta.env.VITE_API_URL as string })]);

const client = new ApolloClient({
    cache: new InMemoryCache({
        addTypename: false,
    }),
    link: ApolloLink.from([link]),
});

export default client;