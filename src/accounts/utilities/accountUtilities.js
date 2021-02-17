import firebase from 'firebase/app';
import { getUserInfo } from '../../auth/utilities/getUserInfo.js'
import { mapAsync } from '../../global/utilities/mapAsync.js'

export const getAccounts = async id => {
	const querySnapshot = await firebase.firestore().collection('accounts').where('user', '==', id).get();

	const accounts = querySnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));

	const populatedAccounts = await mapAsync(accounts, async account => {
		const user = await getUserInfo(account.userId);
		return {
			...account,
			user
		}
	})

	return populatedAccounts;

}


export const createAccount = async accountData => {
	const res = await firebase.firestore().collection('accounts').add(accountData);
	return res;
}

export const updateAccount = async accountData => {
	const res = await firebase.firestore().collection('accounts').doc(accountData.id).set(accountData);
	return res;
}


export const deleteAccount = async accountData => {
	const res = await firebase.firestore().collection('accounts').doc(accountData.id).delete();
	return res;
}	