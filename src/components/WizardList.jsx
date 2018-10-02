import React from 'react'

class WizardList extends React.Component {
	state = {
		currentStep: 0,
		totalSteps: this.props.children.length - 1,
	}

	goToPreviousStep = () => {
		this.setState({ currentStep: this.state.currentStep - 1 })
	}

	goToNextStep = () => {
		this.setState({ currentStep: this.state.currentStep + 1 })
	}

	goToFirstStep = () => {
		this.setState({ currentStep: 0 })
	}

	render() {
		const children = React.Children.map(this.props.children, (child, index) => {
			const { currentStep, totalSteps } = this.state

			return React.cloneElement(child, {
				isActive: index === currentStep,
				displayPrevious: currentStep > 0,
				displayNext: currentStep < totalSteps,
				displayReset: currentStep === totalSteps,
				goToPreviousStep: () => this.goToPreviousStep(),
				goToNextStep: () => this.goToNextStep(),
				goToFirstStep: () => this.goToFirstStep(),
			})
		})

		return children
	}
}

export default WizardList
