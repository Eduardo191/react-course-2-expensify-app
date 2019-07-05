import { login, logout } from '../../actions/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('login action', () => {
    const store = createMockStore({});
    store.dispatch(login('123abc'));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type:'LOGIN',
        uid: '123abc'
    });
});

test('logout action', () => {
    const store = createMockStore({});
    store.dispatch(logout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type:'LOGOUT'
    });
});