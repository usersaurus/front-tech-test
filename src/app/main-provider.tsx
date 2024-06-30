import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

type AppProviderProps = {
  children: React.ReactNode;
};


const MainProvider = ({ children }: AppProviderProps) => {
  return (
    <ApolloProvider client={client}>
      <ToastContainer theme="dark" />
      {children}
    </ApolloProvider>
  );
};

export default MainProvider;