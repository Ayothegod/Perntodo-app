
const data = [
    {
        id: 1,
        name: "Lebron",
        last_name: "james",
        age: 37,
    },
    {
        id: 2,
        name: "lil",
        last_name: "nas",
        age: 35,
    },
    {
        id: 3,
        name: "rihanna",
        last_name: "babe",
        age: 30,
    },
]
console.log(data);

export default function handler(req, res) {
    const { method } = req

    if (method == "GET") {
        res.status(200).json({ name: 'John Doe', age: 30, who: "boy" })
    }

    // if (method == "POST") {
    //     const data = req.body
        
    // }
}