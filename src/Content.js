import { createComponent } from './aleact/index.js';

const Content = createComponent(
    'div',
    [['class', 'content']],
    [],
    [
        createComponent(
            'button',
            [
                ['class', 'btn'],
            ],
            [
                ['click', function() {
                    this.setState({ click: this.state.click === 'true' ? 'false' : 'true' });
                }]
            ],
            ['버튼 클릭: <%= click %>'],
            { click: 'true' }
        ),
    ],
    {},
);

export default Content;
