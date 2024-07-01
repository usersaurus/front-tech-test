import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";

type AppProviderProps = {
  children: React.ReactNode;
};


const MainProvider = ({ children }: AppProviderProps) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default MainProvider;