import React, { CSSProperties, FunctionComponent } from 'react'
import { GetClockInfo } from './GetClockInfo'
import './css/Login.css'

export default function UseClock(){
	const clock = GetClockInfo()
	

	return (
		<>

			<div
				className="clock"
				style={
					{
						'--hours': `${clock.hours}`,
						'--minutes': `${clock.minutes}`,
						'--seconds': `${clock.seconds}`,
					} as CSSProperties
				}
			>
				<span className="clock__hours" />
				<span className="clock__minutes" />
				<span className="clock__seconds" />
			</div>
		</>
	)
}
