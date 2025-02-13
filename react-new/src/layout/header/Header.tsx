import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Navigation } from "../../features/feature_navigation";
import { TabView } from "../../features/tab_view";

export const Header = () => {
    return (
        <div className="w-full h-full overflow-hidden">
            <PanelGroup direction="horizontal" className="w-full h-full">
                {/* Navigation Panel - Fixed Width */}
                <Navigation summaryBarClassName="w-[65px] h-full" detailPaneClassName="min-w-64 h-full overflow-hidden" />

                {/* Resize Handle */}
                <PanelResizeHandle className="w-[1px] bg-gray-100 hover:bg-blue-500 transition-colors cursor-col-resize" />

                {/* Detail Pane - Expand/Collapse with Limits */}
                <Panel defaultSize={80} minSize={10} className="h-full">
                    <TabView className="w-full h-full overflow-auto" />
                </Panel>
            </PanelGroup>
        </div>
    );
}