import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer, Header, Navbar } from "./layout";

const queryClient = new QueryClient();

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
}