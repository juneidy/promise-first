if (!Promise.first) {
	Promise.first = (ps, count = 1) => (
		new Promise((res, rej) => {
			// Invalid count
			count < 1 && rej()

			let total = ps.length
			const vals = []

			// Reject when all finished
			function decrement () {
				!--total && rej()
			}

			// Resolve when count reached
			function countDown (v) {
				if (count--) {
					vals.push(v)
					!count && res(vals)
				}
				decrement()
			}

			ps.forEach(p => Promise.resolve(p).then(countDown, decrement))
		})
	)
}
