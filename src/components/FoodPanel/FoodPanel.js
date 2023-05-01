import { Col } from "react-bootstrap";
import FoodList from "../FoodList/FoodList";
import FoodInput from "../FoodInput/FoodInput";

const FoodPanel = () => {
    return (
        <>
            <Col>
                <h1>Food Panel</h1>
                <FoodInput />
                <FoodList />
            </Col>
        </>
    );
}

export default FoodPanel;