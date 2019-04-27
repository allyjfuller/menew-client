import {API_BASE_URL} from '../config';

function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong');
    }

    return fetch(`${API_BASE_URL}/item/?search=${name}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.results.map(item => item.name));
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(name)), 500);
    });
}

export default search