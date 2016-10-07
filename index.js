if (!Promise.first) {
	Promise.first = ps => (
		new Promise(res => ps.forEach(p => Promise.resolve(p).then(res)))
	)
}
