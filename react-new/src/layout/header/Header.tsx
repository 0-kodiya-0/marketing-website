import { Navigation } from "../../features/feature_navigation";
import { TabView } from "../../features/tab_view";

export const Header = () => {
    return (
        <div className="h-full flex flex-1 overflow-hidden">
            <div className="flex">
                <Navigation />
            </div>
            <main className="flex-1 bg-gray-50 flex flex-col">
                <TabView />
            </main>
        </div>
    );
}