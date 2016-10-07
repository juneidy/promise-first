if (!Promise.first) {
	Promise.first = (ps, count = 1) => (
		new Promise(res => {
			const vals = []

			function countDown (v) {
				if (count--) {
					vals.push(v)
					!count && res(vals)
				}
			}

			ps.forEach(p => (
				Promise.resolve(p).then(countDown)
			))
		})
	)
}
