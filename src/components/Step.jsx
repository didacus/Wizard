import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	font-size: 16em;
	color: white;
	background-color: ${props => props.colour};
`

const Content = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Controls = styled.div`
	display: flex;
	flex-direction: row;
	padding: 40px;
`

const Step = props => {
	const { isActive, displayPrevious, displayNext, displayReset, children, colour } = props

	if (isActive === false) return null

	console.log(props)

	return (
		<Wrapper colour={colour}>
			<Content>
				{children}
				<Controls>
					<Previous isActive={displayPrevious} goToPreviousStep={() => props.goToPreviousStep()} />
					<Next isActive={displayNext} goToNextStep={() => props.goToNextStep()} />
					<Reset isActive={displayReset} goToFirstStep={() => props.goToFirstStep()} />
				</Controls>
			</Content>
		</Wrapper>
	)
}

const Next = props => {
	const { isActive } = props
	if (isActive === false) return null

	return (
		<button onClick={() => props.goToNextStep()}>
			<h2>Next</h2>
		</button>
	)
}

const Previous = props => {
	const { isActive } = props
	if (isActive === false) return null

	return (
		<button onClick={() => props.goToPreviousStep()}>
			<h2>Previous</h2>
		</button>
	)
}

const Reset = props => {
	const { isActive } = props
	if (isActive === false) return null

	return (
		<button onClick={() => props.goToFirstStep()}>
			<h2>Reset</h2>
		</button>
	)
}

export default Step
