import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounters = [
    
]

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => (
    <div data-testid = "ItemCounter"
        name={props.name} 
        quantity={props.quantity}
    />),
}))


describe('FirstStepsApp', () => {
    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    })

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);

        screen.debug();
    })
})