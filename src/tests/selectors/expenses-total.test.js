import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const resp = selectExpensesTotal([]);
    expect(resp).toBe(0);
});

test('should correctly add a single expense', () => {
    const resp = selectExpensesTotal([expenses[0]]);
    expect(resp).toBe(195);
});

test('should correctly add a multiple expenses', () => {
    const resp = selectExpensesTotal(expenses);
    expect(resp).toBe(114195);
});