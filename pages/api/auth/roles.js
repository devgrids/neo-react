const NAMESPACE = process.env.AUTH0_NAMESPACE;

const ROLES = {
    "yordy.lmv.2000@gmail.com": ["admin"],
}
//http://localhost:3000/api/auth/roles?email=yordy.lmv.2000@gmail.com

export default function getRole(req, res) {
    try {
        const email = req.query?.email;
        const role = ROLES[email];

        if (email && role) {
            return res.json({ [NAMESPACE + "/roles"]: role })
        }
        return res.json({ [NAMESPACE + "/roles"]: ["guest"] })
    }
    catch (e) {
        return res.status(e.status || 422).json(e.response.data)
    }
}