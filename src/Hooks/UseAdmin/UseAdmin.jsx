import { useEffect, useState } from "react"

const UseAdmin = email => {
    const [isAdmin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        fetch(`https://bd-ecomere-server.vercel.app/user/admin/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                setAdminLoading(false);
            })
    }, [email])
    return [isAdmin, adminLoading]
}

export default UseAdmin;