import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const clickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', clickOutside, true)
		return () => {
			document.removeEventListener('click', clickOutside, true)
		}
	})
	return { ref, isShow, setIsShow }
}
