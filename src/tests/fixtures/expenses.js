import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    amount: 195,
    note: 'my note',
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    amount: 109500,
    note: 'my note',
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    amount: 4500,
    note: 'my note',
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses;