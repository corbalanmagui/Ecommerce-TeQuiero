module.exports = (req, res, next) => {
	if(req.user) {
		var {admin} = req.user
	}
	if(admin) {
		next()
	} else {
		res.status(401).json({ msg: 'No estas autorizado para ver esta página' });
	}
/* 	// Leer Token header
	const token = req.header('x-auth-token'); // trae el token
    //Revisar si no hay token
	try {
		const successToken = jwt.verify(token, process.env.JWT_SECRET);
		console.log(successToken)
        req.user = successToken.result;
        if (req.user && !req.user.isAdmin) return res.status(401).json({ msg: 'No sos admin' }); // si no tiene token permiso denegado
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Invalid Token' });
	} */
};