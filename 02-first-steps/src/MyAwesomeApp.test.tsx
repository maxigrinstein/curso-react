import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('should render name and lastName', () => {
        // render(<MyAwesomeApp name='Maximiliano' lastName='Grinstein'/>);
        // screen.debug()

        // const h1 = screen.getByTestId('first-name-title');
        // console.log(h1.innerHTML);

        //const h1 = container.querySelector('h1');
        //expect(h1?.innerHTML).toBe('Maximiliano'); //! ---> Esto es tal cual como se renderiza

        //const h3 = container.querySelector('h3');
        //expect(h3?.innerHTML).toContain('Grinstein'); //! ---> Esto es si lo que renderiza lo contiene
        
        
    });

    // test('should match snapshot', () => {
    //     const { container } = render(<MyAwesomeApp name='Maximiliano' lastName='Grinstein'/>);
    //     expect(container).toMatchSnapshot();
    // });
});