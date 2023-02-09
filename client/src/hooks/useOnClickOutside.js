import { useRef } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(false)
	const ref = useRef(false)

	const clickOutside = event => {
		if (ref.current) {
			setIsShow(false)
		}
	}
	return { ref, isShow, setIsShow }
}
