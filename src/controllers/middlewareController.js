import connection from '../config/connectDB.js';

const middlewareController = async(req, res, next) => {
    // xác nhận token
    const auth = req.cookies.auth;
    if (!auth) return res.redirect("/login");
    try {
        // Query Firebase for user with matching token
        const [users] = await connection.execute('users');
        
        // Find user with matching token and verified status
        let user = null;
        if (users && users.length > 0) {
            user = users.find(u => u.token === auth && u.veri === 1);
        }
        
        if (!user) {
            res.clearCookie("auth");
            return res.end();
        };
        
        if (auth === user.token && user.status == '1') {
            next();
        } else {
            return res.redirect("/login");
        }
    } catch (error) {
        console.error('Middleware error:', error);
        return res.redirect("/login");
    }
}

export default middlewareController;