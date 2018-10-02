import React from 'react'
import Wizard from './WizardList'
import Step from './Step'

const pageData = [
	{
		label: 'A',
		colour: '#000000',
	},
	{
		label: 'B',
		colour: '#212121',
	},
	{
		label: 'C',
		colour: '#424242',
	},
	{
		label: 'D',
		colour: '#616161',
	},
	{
		label: 'E',
		colour: '#757575',
	},
]

const _renderPages = pageData => {
	return pageData.map((data, index) => {
		return (
			<Step colour={data.colour} key={index}>
				{data.label}
			</Step>
		)
	})
}

const WizardComponent = () => {
	return <Wizard>{_renderPages(pageData)}</Wizard>
}

export default WizardComponent
