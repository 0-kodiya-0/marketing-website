import { QueryClientProvider } from "@tanstack/react-query";
import { Footer, Header, Navbar } from "./layout";
import { queryClient } from './api/persistConfig';

export const App = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Header />
                <Footer />
            </QueryClientProvider>
        </div>
    );
};