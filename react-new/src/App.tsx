import { QueryClientProvider } from "@tanstack/react-query";
import { Footer, Header, Navbar } from "./layout";
import { queryClient } from './api/persistConfig';
import { useEnvironmentStore } from "./features/environment";
import { useAccountStore } from "./features/user_account";

export const App = () => {

    const activeAccount = useAccountStore(state => state.activeAccount);
    const environment = useEnvironmentStore(state => state.selectedEnvironment);

    if (!activeAccount) {
        return <div className="w-full h-full flex justify-center items-center">
            No Active account. Please logic first
        </div>
    }

    return (
        <div className="flex flex-col h-screen bg-white">
            <QueryClientProvider client={queryClient}>
                <Navbar activeAccount={activeAccount} activeEnvironment={environment} />
                <Header environment={environment} />
                <Footer />
            </QueryClientProvider>
        </div>
    );
};