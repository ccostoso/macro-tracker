import { Col, Card, Row } from "react-bootstrap"

const FoodCard = () => {
    return (
        <Col>
            <Card className="p-1 mb-2">
                <Row>
                    <Col className="text-center" md="8">
                        <h3>Breakfast Sandwich</h3>
                    </Col>
                    <Col className="text-center" >
                        <h3>1 serving</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center">40g</h2>
                        <h6 className="text-center">Carbs</h6>
                    </Col>
                    <Col>
                        <h2 className="text-center">30g</h2>
                        <h6 className="text-center">Protein</h6>
                    </Col>
                    <Col>
                        <h2 className="text-center">15g</h2>
                        <h6 className="text-center">Fat</h6>
                    </Col>
                </Row>
            </Card>
        </Col>
    )

}

export default FoodCard;