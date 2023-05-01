import { InputGroup, Form, DropdownButton, Dropdown, Button } from "react-bootstrap"

const FoodInput = () => {
    return (
        <section className="mb-3">
            <InputGroup className="mb-1">
                <InputGroup.Text>Food name</InputGroup.Text>
                <Form.Control aria-label="Food name" />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />
                <InputGroup.Text>grams</InputGroup.Text>
                <DropdownButton
                    variant="outline-secondary"
                    title="Unit"
                    id="unit-dropdown"
                    align="end"
                >
                    <Dropdown.Item href="#">grams</Dropdown.Item>
                    <Dropdown.Item href="#">ounces</Dropdown.Item>
                    <Dropdown.Item href="#">servings</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <Button>Add</Button>
        </section>
    )
}


export default FoodInput;