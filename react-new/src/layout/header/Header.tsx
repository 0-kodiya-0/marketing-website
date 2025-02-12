import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Navigation } from "../../features/feature_navigation";
import { TabView } from "../../features/tab_view";

export const Header = () => {
    return (
        <div className="h-full flex flex-1">
            <PanelGroup 
                direction="horizontal" 
                className="flex-1"
            >
                <Panel 
                    defaultSize={20} 
                    minSize={15}
                >
                    <div className="flex overflow-x-auto">
                        <Navigation />
                    </div>
                </Panel>

                <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-blue-500 transition-colors cursor-col-resize" />

                <Panel 
                    defaultSize={80}
                    minSize={30}
                >
                    <TabView />
                </Panel>
            </PanelGroup>
        </div>
    );
};