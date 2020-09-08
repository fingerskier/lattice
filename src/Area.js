import React,{useEffect,useState} from 'react'

function Area({which="sample"}) {
	const [data, setData] = useState(null)

	useEffect(() => {
		const url = `https://github.com/fingerskier/lattice/data/${which}/game.json`

		fetch(url)
		.then(dat=>{
			setData(dat)
		})
		.catch(err=>{
			console.error(err)
		})
	}, [which])

	return (
		<section>
			{console.log(JSON.stringify(data))}	
		</section>
	)
}

export default Area