const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

export default {
    getUsers
}
