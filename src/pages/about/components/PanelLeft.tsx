import Hobbies from "./Hobbies";
import PersonalInfo from "./PersonalInfo";
import Professional from "./Professional";

const PanelLeft = ({ activeTab, active, onBarChange }: {
    activeTab: string;

    active: string;
    onBarChange: (bar: string) => void;

}) => {

    const renderContent = () => {
        switch (active) {
            case "personal":
                return <PersonalInfo onBarChange={onBarChange} activeTab={activeTab} />;
            case "professional":
                return <Professional />;
            case "hobbies":
                return <Hobbies />;
            default:
                return <div>Select a section</div>;
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    )
}

export default PanelLeft