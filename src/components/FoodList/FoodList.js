import { Row, Col } from "react-bootstrap";
import FoodCard from "../FoodCard/FoodCard";

const FoodList = () => {
    const numArr = [...Array(5).keys()];
    console.log(numArr);

    return (
        <>
            {numArr.map(num => {
                return (
                    <Row>
                        <FoodCard key={num} />
                    </Row>
                )
            })
            }
        </>
    );
}

export default FoodList;