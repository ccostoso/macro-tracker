import { Row } from "react-bootstrap";
import FoodPanel from "../FoodPanel/FoodPanel";
import CaloriePanel from "../CaloriePanel/CaloriePanel";

const PanelWindow = () => {
    return (
        <Row>
            <FoodPanel />
            <CaloriePanel />
        </Row>
    );
}

export default PanelWindow;