import axios from 'axios';

export const APIHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	Authorization: {
		toString() {
			return `Bearer ${localStorage.getItem('token')}`;
		},
	},
};
// https://back-game.herokuapp.com/api/v1
export const API = axios.create({
	baseURL: 'https://backgamenodejs-production.up.railway.app/api/v1',
	timeout: 10000,
	headers: APIHeaders,
});
