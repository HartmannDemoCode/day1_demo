const persons = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}];

const Names = () => {
    return (
        <table>
            <tr><th>ID</th><th>First Name</th><th>Last Name</th></tr>
        <tbody>
        {persons.map((person,idx)=>{
        return (
            <tr key={idx}><td>{idx}</td><td>{person.fname}</td><td> {person.lname}</td></tr>
        )
        })}
   </tbody>
   </table>
);
}
export default Names;