import firebase from 'firebase/app';
import { mapAsync } from '../../global/utilities/mapAsync.js'

export const getAccounts = async accountId => {
	const querySnapshot = await firebase.firestore().collection('accounts').where('accountId', '==', accountId).get();

	const accounts = querySnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
}