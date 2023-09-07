import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Layout>
            <Navigation />
          </Layout>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
