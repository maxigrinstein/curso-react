import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { b } from "vitest/dist/chunks/suite.d.FvehnV49.js";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        render(<ItemCounter name='Test item'/>)

        expect(screen.getByText('Test item')).toBeDefined();
        expect(screen.getByText('Test item')).not.toBeNull();
    })


    test('should render with custom quantity', () => {
        
        const name = 'Control de Nintendo';
        const quantity = 10;
        render(<ItemCounter name={name} quantity={quantity}/>)
        expect(screen.getByText(quantity)).toBeDefined();
    })

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name='Test item'quantity={1}/>);

        const [buttonAdd] = screen.getAllByRole('button');
        
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    })

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name='Test item'quantity={quantity}/>);
        
        const [, buttonDecrease] = screen.getAllByRole('button');
        fireEvent.click(buttonDecrease);
        expect(screen.getByText('4')).toBeDefined();
    })

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        render(<ItemCounter name='Test item'quantity={1}/>);
        
        const [, buttonDecrease] = screen.getAllByRole('button');
        fireEvent.click(buttonDecrease);
        expect(screen.getByText('1')).toBeDefined();

        
    })

    test('should change to red when count is 1', () => {
        const quantity = 1;
        render(<ItemCounter name='Test item'quantity={quantity}/>);
        expect(screen.getByText('Test item').style.color).toBe('red');

    })
    test('should change to black when count is more than1', () => {
        const quantity = 2;
        render(<ItemCounter name='Test item'quantity={quantity}/>);
        const itemText = screen.getByText('Test item');
        expect(itemText.style.color).toBe('black');

    })
})