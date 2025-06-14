import Hobbies from "./Hobbies";
import PersonalInfo from "./PersonalInfo";
import Professional from "./Professional";

const PanelLeft = ({ active }: {
    active: string;
}) => {

    const renderContent = () => {
        switch (active) {
            case "personal":
                return <PersonalInfo />;
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