
const fetchUsers = async () => {
    try {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean');
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();