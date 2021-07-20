const Iqbalz = require(".")



(async () => {
	await Iqbalz.Musikmatch(`Surat cinta untuk starla`).then(respon => {
		console.log(respon)
	})
})()