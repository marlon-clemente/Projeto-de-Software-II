import { auth, googleProvider, recommendation as recomDb } from '../../services/firebase';
import React, { useEffect, useState } from 'react';

import Button from '../Button';

import { ContainerRecommendation } from './styles';
import { useAlert } from 'react-alert';

interface RecommendationInterface {
	noneRecommendation ?: boolean,
	numberRecommendation ?: number
}

interface InterfaceUser {
	id?: string,
	name?: string,
	photoUrl?: string 
} 

const Recommendation: React.FC<RecommendationInterface> = ({ noneRecommendation, numberRecommendation }) => {
	const [isNewRecommendation, setIsNewRecommendation] = useState(false);
	const [recommendation, setRecommendation] = useState<Array<string>>([]);
	const alert = useAlert();
	const [user, setUser] = useState<InterfaceUser >({
		id: '',
		name: '',
		photoUrl: ''
	});
	
	const handleNewRecommendation = () =>{
		setIsNewRecommendation(!isNewRecommendation)
	}

	const handleGoogle = () => {
		auth.signInWithPopup(googleProvider)
			.then((res)=>{
				setUser({
					id: res.user?.uid || 'ind',
					name: res.user?.displayName || 'ind',
					photoUrl: res.user?.photoURL || 'ind'
				})
				alert.show('Sua indicação foi computada com sucesso!')
				
			})
			.catch((error)=>{
				console.log(error)
				alert.show("Erro")
			})
	}
	
	const getRecommendation = () => {
		recomDb.on('value', (snap)=> {
			let ar: Array<string> = [];
			let item = snap.val();
			let ids = numberRecommendation; 

			for (let i in item){
				if( item[i].idSchool === ids) {
					ar.push(item[i].user)
				}
			}

			setRecommendation(ar)
		})
	}

	useEffect(() => {
		getRecommendation();
		if(user.id !== ''){
			recomDb.push({
				idSchool: numberRecommendation,
				user: user.id
			})
		}
	}, [user]);


	if (recommendation.length < 0){
		return (<ContainerRecommendation>
			<div className="none-recommendation">
				<span>Aguarde...</span>
			</div>
		</ContainerRecommendation>)
	}

	if (recommendation.length === 0 && !isNewRecommendation){
		return (<>
			<ContainerRecommendation>
				<div className="none-recommendation">
					<span>Não há indicações para essa escola no momento</span>
					<strong>Seja o primeiro a indica-la</strong>
				</div>
			</ContainerRecommendation>
			<Button gradient onClick={handleNewRecommendation}>
				Realizar indicação
			</Button>
		</>)
	}

	if (recommendation.length >= 1 && !isNewRecommendation){
		return (<>
			<ContainerRecommendation>
				<div className="none-recommendation">
					{
						recommendation.length === 1 ? (
							<strong>1 indicação</strong>
						) : (
							<strong>{recommendation.length} indicações</strong>
						)
					}
				</div>
			</ContainerRecommendation>
			<Button gradient onClick={handleNewRecommendation}>
				Realizar indicação
			</Button>
		</>)
	}

	return (
		<>
			{ isNewRecommendation && (<>
			<ContainerRecommendation>
				<div className="new-box-recommendation">
					<strong>Nova indicação</strong>
					<span>Você deve usar uma das seguintes
						contas para realizar uma indicação</span>
				</div>
			</ContainerRecommendation>  

			<Button google onClick={handleGoogle}>Indicar usando o Google</Button>
			{/* <Button facebook onClick={()=>{ alert.show('Em futuras atualizações') }}>Indicar usando o Facebook</Button> */}
			</>)}
		</>
	);
}

export default Recommendation;